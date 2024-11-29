/**
 * @author : 乔磊磊
 * @date   : 2024/11/29 14:41
 * @Desc   : 遍历目录csv转ts
 */
import * as fs from 'fs';
import * as path from 'path';

// 读取目录内容
function readDirectory(directoryPath: string): string[] {
    return fs.readdirSync(directoryPath);
}

// 检查文件是否为CSV文件
function isCSVFile(filePath: string): boolean {
    return path.extname(filePath).toLowerCase() === '.csv';
}

// 读取CSV文件
function readCSV(filePath: string): string {
    return fs.readFileSync(filePath, 'utf8');
}

// 校验字符串
function containsOnlyCommas(str: string): boolean {
    // 使用正则表达式匹配字符串，^ 表示字符串开始，$ 表示字符串结束
    // [,]* 表示零个或多个逗号
    return /^[,]*$/.test(str);
}

// 解析CSV内容
function parseCSV(csvData: string): string[][] {
    const rows = csvData.split('\n');
    const result: string[][] = [];

    for (let i = 0; i < rows.length; i++) {
        let row = rows[i].trim();
        // 去掉换行符
        row = row.replace('\r', '');
        if (containsOnlyCommas(row)) {
            // 如果该行只包含逗号，则不再解析
            break;
        }
        const columns = row.split(',');
        result.push(columns);
    }
    return result;
}

export interface CsvToTs {

}
// 将parseCSV解析出来的字符串数组转成ts对象
function convertToTsObject(csvData: string[][]): string {
    let tsObject = 'export const ';
    for (let i = 0; i < csvData.length; i++) {
        const row = csvData[i];
        tsObject += `export const ${row[0]} = {${row.slice(1).map((item, index) => `${item}: ${index + 1}`).join(',')}};\n`;
    }
    return tsObject;
}

// 遍历目录并解析CSV文件
function traverseAndParseCSV(directoryPath: string): void {
    const files = readDirectory(directoryPath);

    for (const file of files) {
        const filePath = path.join(directoryPath, file);

        if (fs.statSync(filePath).isDirectory()) {
            // 如果是目录，递归遍历
            traverseAndParseCSV(filePath);
        } else if (isCSVFile(file)) {
            // 如果是CSV文件，读取并解析
            const csvData = readCSV(filePath);
            const parsedData = parseCSV(csvData);

            console.log(`Parsed data from ${filePath}:`);
            console.log(parsedData);
        }
    }
}

// 获取文件名
function getFileName(filePath: string): string {
    return path.basename(filePath, path.extname(filePath));
}

// 去掉字符串中的中文
function extractEnglish(str: string): string {
    return str.replace(/[\u4e00-\u9fa5]/g, '');
}

// 去掉字符串开头结尾的_
function removeUnderscores(str: string): string {
    return str.replace(/^_+|_+$/g, '');
}

const fileName = getFileName("D:/WorkSpace/x-preschool/src/道具列表_Prop_ff2.csv")
console.log(fileName);
console.log(extractEnglish(fileName));
console.log(removeUnderscores(extractEnglish(fileName)));

// 使用示例
// const filePath = 'D:/WorkSpace/x-preschool/src/道具列表_Prop.csv';
// const csvData = readCSV(filePath);
// const parsedData = parseCSV(csvData);
// console.log(parsedData);
// console.log(`convertToTsObject ${convertToTsObject(parsedData)}:`);

// 使用示例
// const directoryPath = 'D:/WorkSpace/x-preschool/src';
// traverseAndParseCSV(directoryPath);