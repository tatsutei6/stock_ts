"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");
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
console.log("indicators:", indicators);
const quarterlyPeriods = [];
if (jsonData) {
    const quarterDateJson = jsonData[0];
    const keyPrefix = "EMPTY_";
    for (let i = 1; i < Object.keys(quarterDateJson).length; i++) {
        const dateKey = `${keyPrefix}${i}`;
        const dateValue = quarterDateJson[dateKey];
        quarterlyPeriods.push(dateValue);
    }

for (let i = 1; i < jsonData.length; i++) {
    const item = jsonData[i];
    const itemName = item["EMPTY"];
    
    
}
    
}
