import { useState, useEffect, useCallback, useRef, memo } from "react";
import styled from "styled-components";
import { Loader } from "./components/Loader/Spinner";

/* ------ hackfontend.com taks--------
Реализуйте бесконечный скролл с загрузкой данных из API.

Требования:
✓ При скролле до конца списка загружаются следующие элементы
✓ Индикатор загрузки во время fetch
✓ Обработка ошибок загрузки с возможностью retry
✓ Предотвращение множественных запросов (debounce/throttle)
✓ Отображение сообщения "No more items" когда все данные загружены
✓ Smooth scroll experience без багов
✓ Оптимизация производительности

API эндпоинт (mock):
- Используйте встроенную функцию fetchUsers(page, limit)
- Возвращает { data: User[], hasMore: boolean }
- Имитирует задержку сети 500ms

Критерии приемки:
✓ Загружается первая страница при монтировании
✓ При достижении конца списка автоматически загружается следующая
✓ Loading state показывается корректно
✓ Нет дублирующих запросов
✓ Обработаны edge cases (пустой список, ошибки, последняя страница)
✓ Производительность оптимизирована (useCallback, useMemo где нужно)


*/

interface FetchUsersResponse {
  data: Data[];
  hasMore: boolean;
  page: number;
  total: number;
}

type Data = { id: number; name: string; email: string; avatar: string };
// Mock API function - DO NOT MODIFY
const fetchUsers = (page: number, limit = 20) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const totalUsers = 100;
      const start = (page - 1) * limit;
      const end = Math.min(start + limit, totalUsers);

      // Simulate random error (5% chance)
      if (Math.random() < 0.05) {
        reject(new Error("Failed to fetch users"));
        return;
      }

      const users = [];
      for (let i = start; i < end; i++) {
        users.push({
          id: i + 1,
          name: `User ${i + 1}`,
          email: `user${i + 1}@example.com`,
          avatar: `https://i.pravatar.cc/150?img=${(i % 70) + 1}`,
        });
      }

      resolve({
        data: users,
        hasMore: end < totalUsers,
        page,
        total: totalUsers,
      });
    }, 500);
  });
};
interface UserProps {
  data: { id: number; name: string; email: string; avatar: string };
}

export const User = ({ data }: UserProps) => {
  return (
    <StyledWrapperTEST>
      <div className="user-card">
        <div className="user-info">
          {" "}
          <h1 className="user-name">{data.name}</h1>
          <p className="user-email">{data.email}</p>
        </div>

        <img src={data.avatar} alt="" className="user-avatar" />
      </div>
    </StyledWrapperTEST>
  );
};

export const App2 = memo(() => {
  // Your code here

  // TODO: Implement state management
  // TODO: Implement infinite scroll logic
  // TODO: Implement error handling
  // TODO: Optimize performance
  const [page, setPage] = useState(1);
  const [error, setError] = useState<any>(null);
  const [result, setResult] = useState<FetchUsersResponse | undefined>(
    undefined,
  );
  const [allData, setAllData] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loaderRef = useRef<HTMLDivElement | null>(null);
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (result) {
      setAllData((prev) => {
        const newUsers = result.data.filter(
          (newUser) => !prev.some((oldUser) => oldUser.id === newUser.id),
        );

        return [...prev, ...newUsers];
      });
    }
  }, [result]);

  const nextPage = useCallback(() => {
    if (!loading && !error && result?.hasMore) {
      setPage((prev) => prev + 1);
    }
  }, [loading, error, result]);

  const dataFetch = useCallback(async () => {
    if (loading) return;
    setError("");
    setLoading(true);

    try {
      const resp = (await fetchUsers(page)) as FetchUsersResponse;
      setResult(resp);
    } catch (error) {
      const e = error as Error;

      if (error) {
        setError(e.message);
      }
    } finally {
      setLoading(false);
    }
  }, [page]);
  useEffect(() => {
    dataFetch();
  }, [dataFetch]);

  const handleRetry = () => {
    dataFetch();
  };

  useEffect(() => {
    if (!loaderRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        // isIntersecting значит, что div появился в зоне видимости
        if (entries[0].isIntersecting) {
          nextPage();
        }
      },
      { threshold: 0.5 },
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [nextPage]);

  return (
    <StyledWrapperTEST>
      <div className="app">
        <h1>Infinite Scroll</h1>
        <div className="user-list">
          {allData?.map((a) => (
            <User data={a} key={a.id} />
          ))}
        </div>

        {result?.hasMore && (
          <div className="loadingOOO" ref={loaderRef}>
            <div className="spinnerOOO"></div>
          </div>
        )}

        {!result?.hasMore && (
          <div>
            <p className="end-message">No more items</p>
          </div>
        )}
        {error && (
          <div onClick={() => handleRetry()}>
            <button className="retry-button">Try again</button>
          </div>
        )}
        <div className="error"> {error && <p>{error}</p>}</div>
      </div>
    </StyledWrapperTEST>
  );
});

const StyledWrapperTEST = styled.div`
  .app {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
  }

  .user-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .loadingOOO {
    text-align: center;
    padding: 20px;
    color: #666;
  }

  .spinnerOOO {
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spinOOO 1s linear infinite;
  }

  @keyframes spinOOO {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .user-card {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition:
      transform 0.2s,
      box-shadow 0.2s;
  }

  .user-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .user-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }

  .user-info {
    flex: 1;
  }

  .user-name {
    font-size: 18px;
    font-weight: 600;
    color: #333;
    margin: 0 0 4px 0;
  }

  .user-email {
    font-size: 14px;
    color: #666;
    margin: 0;
  }

  .error {
    text-align: center;
    padding: 20px;
    color: #e74c3c;
    background: #fee;
    border-radius: 8px;
    margin: 20px 0;
  }

  .retry-button {
    margin-top: 10px;
    padding: 10px 20px;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
  }

  .retry-button:hover {
    background: #2980b9;
  }

  .end-message {
    text-align: center;
    padding: 20px;
    color: #999;
    font-style: italic;
  }
`;
