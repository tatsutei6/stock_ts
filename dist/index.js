"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const XLSX = __importStar(require("xlsx"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
// 示例1: 读取本地文件
function readExcelFile(filePath) {
    try {
        // 使用 XLSX.readFile 读取文件
        const workbook = XLSX.readFile(filePath);
        // 获取工作表名称列表
        const sheetNames = workbook.SheetNames;
        console.log('工作表名称:', sheetNames);
        // 读取第一个工作表
        const firstSheetName = sheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        // 将工作表转换为 JSON 格式
        const data = XLSX.utils.sheet_to_json(worksheet);
        console.log('数据内容:', data);
    }
    catch (error) {
        console.error('读取 Excel 文件时出错:', error);
    }
}
// 安全地读取 JSON 文件
function readJsonFile() {
    try {
        const filePath = path.join(__dirname, 'data.json');
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const jsonData = JSON.parse(fileContent);
        return jsonData;
    }
    catch (error) {
        console.error('读取 JSON 文件时出错:', error);
        return null;
    }
}
// 使用示例（需要将 'example.xlsx' 替换为实际文件路径）
// readExcelFile('/Users/tatsutei/Downloads/financial_statements_main/000002_万科A_main_simple.xls');
const jsonData = readJsonFile();
const indicators = (_a = jsonData === null || jsonData === void 0 ? void 0 : jsonData.map((item) => item["EMPTY"])) !== null && _a !== void 0 ? _a : [];
const quarterlyPeriods = [];
if (jsonData) {
    console.log('JSON数据读取成功，前5条记录:');
    const quarterDateJson = jsonData[0];
    const itemName = quarterDateJson["EMPTY"];
    quarterDateJson.forEach((date, dateIndex) => {
        const dateKey = `EMPTY_${dateIndex + 1}`;
        const dateValue = quarterDateJson[dateKey];
        quarterlyPeriods.push(dateValue);
    });
    console.log(quarterlyPeriods);
}
