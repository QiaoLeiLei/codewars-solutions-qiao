/**
 * @author : 乔磊磊
 * @date   : 2024/11/11 10:37
 * @Desc   : 装饰器实现单例
 */
function Singleton<T extends new (...args: any[]) => any>(constructor: T): T {
    let instance: any;

    return class extends constructor {
        constructor(...args: any[]) {
            if (!instance) {
                instance = super(...args);
            }
            return instance;
        }
    };
}

// @ts-ignore
@Singleton
class MySingletonClass {
    // 类的属性和方法
    public value: string;

    constructor(value: string) {
        this.value = value;
    }

    public doSomething(): void {
        console.log(`Value is: ${this.value}`);
    }
}

const instance1 = new MySingletonClass('Hello');
const instance2 = new MySingletonClass('World');

console.log(instance1 === instance2); // 输出：true
instance1.doSomething(); // 输出：Value is: Hello
instance2.doSomething(); // 输出：Value is: Hello