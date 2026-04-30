import React from "react";
import styled from "styled-components";
import { StyledWrapper } from "./Profile.styled";

export function ProfileAdmin() {
  return (
    <StyledWrapper>
      <div className="flex justify-center items-center min-h-[80vh] p-4">
        <div className="bg-slate-800 text-white rounded-2xl shadow-2xl p-8 w-full max-w-md border border-blue-500/30">
          <div className="flex flex-col items-center">
            {/* Аватар-заглушка */}
            <div className="w-24 h-24 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full mb-4 flex items-center justify-center text-3xl font-bold border-4 border-slate-700">
              S
            </div>

            <h1 className="text-2xl font-bold mb-1">SalatEh</h1>
            <p className="text-blue-400 text-sm mb-6 font-mono">
              Status: Deep Learning Mode
            </p>

            <div className="w-full space-y-4">
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <p className="text-xs text-gray-400 uppercase mb-1">
                  Current Focus
                </p>
                <p className="text-sm">React + TypeScript </p>
              </div>

              <div className="bg-slate-700/50 p-4 rounded-lg">
                <p className="text-xs text-gray-400 uppercase mb-1">Level</p>
                <div className="w-full bg-slate-600 h-2 rounded-full mt-2">
                  <div className="bg-blue-500 h-2 rounded-full w-[40%] shadow-[0_0_10px_#3b82f6]"></div>
                </div>
              </div>
            </div>

            <button className="mt-8 px-6 py-2 bg-blue-600 hover:bg-blue-500 transition-colors rounded-full font-bold text-sm uppercase tracking-wider">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}
