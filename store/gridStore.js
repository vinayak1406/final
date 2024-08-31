"use client";

import create from "zustand";

export const useGridStore = create((set, get) => ({
  cellData: {},
  history: [],
  future: [],
  currentPage: 1,
  pageSize: 1000,
  totalCells: 1000,

  updateCell: (id, value) =>
    set(state => {
      const newCellData = { ...state.cellData, [id]: value };
      return {
        cellData: newCellData,
        history: [...state.history, { cellData: state.cellData }],
        future: [],
      };
    }),

  undo: () =>
    set(state => {
      if (state.history.length === 0) return state;
      const previousState = state.history[state.history.length - 1];
      return {
        cellData: previousState.cellData,
        history: state.history.slice(0, -1),
        future: [state.cellData, ...state.future],
      };
    }),

  redo: () =>
    set(state => {
      if (state.future.length === 0) return state;
      const nextState = state.future[0];
      return {
        cellData: nextState,
        history: [...state.history, state.cellData],
        future: state.future.slice(1),
      };
    }),

  setPage: page =>
    set(state => ({
      currentPage: page,
    })),

  getTotalPages: () => Math.ceil(get().totalCells / get().pageSize),

  getVisibleCells: () => {
    const start = (get().currentPage - 1) * get().pageSize;
    const end = start + get().pageSize;
    const visibleCells = {};
    for (let i = start; i < end; i++) {
      const cellId = `cell-${i}`;
      visibleCells[cellId] = get().cellData[cellId] || "";
    }
    return visibleCells;
  },
}));
