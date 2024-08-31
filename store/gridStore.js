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
