"use client"

// components/Grid.js
import React from 'react';
import { useGridStore } from '@/store/gridStore';

const Grid = () => {
    const { getVisibleCells, updateCell, pageSize } = useGridStore();
    const cells = getVisibleCells;

    return (
        <div className="grid grid-cols-10">
            {Array.from({ length: pageSize }).map((_, index) => {
                const cellId = `cell-${index}`;
                return (
                    <input
                        key={cellId}
                        type="text"
                        value={cells[cellId] && ''}
                        onChange={(e) => updateCell(cellId, e.target.value)}
                        className="border p-1 text-black bg-orange-400 rounded-sm"
                    />
                );
            })}
        </div>
    );
};

export default Grid;
