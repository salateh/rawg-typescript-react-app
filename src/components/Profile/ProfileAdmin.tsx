import React, { useState } from "react";
import styled from "styled-components";
import { StyledWrapper } from "./Profile.styled";
import { useProfile } from "../../hooks/Profile/useProfile";
import { useUser } from "../../context/User/UserContext";
export function ProfileAdmin() {
  const {
    edit,
    user,
    handleChange,
    isInvalid,
    handleCancel,
    handleSave,
    handleStartEdit,
    nameInputRef,
  } = useUser();

  return (
    <StyledWrapper>
      <div className="flex justify-center items-center min-h-[80vh] p-4">
        <div className="bg-slate-800 text-white rounded-2xl shadow-2xl p-8 w-full max-w-md border border-blue-500/30">
          <div className="flex flex-col items-center">
            {/* Аватар-заглушка */}
            <div className="w-24 h-24 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full mb-4 flex items-center justify-center text-3xl font-bold border-4 border-slate-700">
              {user.name[0]}
            </div>

            {edit === false && (
              <h1 className="text-2xl font-bold mb-1">{user.name}</h1>
            )}
            {edit && (
              <>
                <p> Не больше 15 символов!</p>
                <input
                  ref={nameInputRef}
                  name="name"
                  type="text"
                  className="text-2xl font-bold mb-1 text-white bg-slate-800 text-center  border-2 border-black-500 rounded-lg p-1 "
                  onChange={handleChange}
                  placeholder="Name..."
                ></input>
              </>
            )}

            {edit === false && (
              <p className="text-blue-400 text-sm mb-6 font-mono">
                Status: {user.status}
              </p>
            )}

            {edit && (
              <input
                name="status"
                type="text"
                className="text-white text-sm mb-6 font-mono bg-slate-800 text-center border-2 border-black-500 rounded-lg p-1"
                onChange={handleChange}
                placeholder="Status..."
              ></input>
            )}

            {edit === false && (
              <div className="w-full space-y-4">
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <p className="text-xs text-gray-400 uppercase mb-1">
                    Current Focus
                  </p>
                  <p className="text-sm">{user.focus} </p>
                </div>

                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <p className="text-xs text-gray-400 uppercase mb-1">Level</p>
                  <div className="w-full bg-slate-600 h-2 rounded-full mt-2">
                    <div
                      className={`bg-blue-500 h-2 rounded-full w-[99%] max-w-[100%] shadow-[0_0_10px_#3b82f6] `}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            {edit && (
              // <div className="w-full space-y-4">
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <p className="text-xs text-gray-400 uppercase mb-1">
                  Current Focus:
                </p>
                <input
                  name="focus"
                  type="text"
                  className="text-white text-sm mb-6 font-mono bg-slate-800 text-center border-2 border-black-500 rounded-lg p-1"
                  onChange={handleChange}
                  placeholder="Focus..."
                ></input>
              </div>
            )}

            {!edit && (
              <button
                onClick={handleStartEdit}
                className="mt-8 px-6 py-2 bg-blue-600 hover:bg-blue-500 transition-colors rounded-full font-bold text-sm uppercase tracking-wider"
              >
                Edit Profile
              </button>
            )}
            {edit && (
              <div>
                <button
                  name="save"
                  onClick={handleSave}
                  className={`mt-8 px-6 py-2 bg-green-600 hover:bg-green-500 transition-colors rounded-full font-bold text-sm uppercase tracking-wider  ${isInvalid ? "bg-gray-400 cursor-not-allowed opacity-50" : "bg-blue-600 hover:bg-blue-700 text-whit"}`}
                >
                  Save
                </button>
                <button
                  // onClick={changeCancelHandler}

                  onClick={handleCancel}
                  className="mt-8 px-6 py-2 text-black bg-rose-600 hover:bg-rose-500 transition-colors rounded-full font-bold text-sm uppercase tracking-wider"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}
