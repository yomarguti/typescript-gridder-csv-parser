"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    const [day, month, year] = dateString.split('/').map((value) => parseInt(value));
    return new Date(year, month - 1, day);
};
exports.dateStringToDate = dateStringToDate;
