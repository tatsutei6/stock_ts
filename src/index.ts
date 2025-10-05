import * as fs from 'fs'
import * as path from 'path'


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

if (jsonData) {
    console.log('JSON数据读取成功，前5条记录:');
    const quarterDateJson = jsonData[0]
    const itemName = quarterDateJson["EMPTY"]
    console.log(itemName)
}

console.log("now is in dev01 branch!")
console.log("now is in dev01 branch!")
console.log("now is in dev01 branch!")
console.log('now is in dev01 branch!!')
