import * as XLSX from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

// 示例1: 读取本地文件
function readExcelFile(filePath: string): void {
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
    } catch (error) {
        console.error('读取 Excel 文件时出错:', error);
    }
}

// 安全地读取 JSON 文件
function readJsonFile(): any {
    try {
        const filePath = path.join(__dirname, 'data.json');
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const jsonData = JSON.parse(fileContent);
        return jsonData;
    } catch (error) {
        console.error('读取 JSON 文件时出错:', error);
        return null;
    }
}

// 使用示例（需要将 'example.xlsx' 替换为实际文件路径）
// readExcelFile('/Users/tatsutei/Downloads/financial_statements_main/000002_万科A_main_simple.xls');

const jsonData = readJsonFile();

const indicators = jsonData?.map((item: Record<string, string>) => item["EMPTY"]) ?? [];

const quarterlyPeriods: string[] = [];
if (jsonData) {
    console.log('JSON数据读取成功，前5条记录:');
    const quarterDateJson = jsonData[0]
    const itemName = quarterDateJson["EMPTY"]
    quarterDateJson.forEach((date: string, dateIndex: number) => {
        const dateKey = `EMPTY_${dateIndex + 1}`;
        const dateValue = quarterDateJson[dateKey];
        quarterlyPeriods.push(dateValue);
    })

    console.log(quarterlyPeriods)
}
