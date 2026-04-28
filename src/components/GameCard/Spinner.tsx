import React from "react";
import { useContext, useState } from "react";
import styled from "styled-components";
import { StyledWrapper } from "./Spinner.styled";

export function Loader() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="order-1">
          <StyledWrapper>
            <div className="pyramid-loader">
              <div className="wrapper">
                <span className="side side1" />
                <span className="side side2" />
                <span className="side side3" />
                <span className="side side4" />
                <span className="shadow" />
              </div>
            </div>
          </StyledWrapper>
        </div>
      </div>
    </>
  );
}
