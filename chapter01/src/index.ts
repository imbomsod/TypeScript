// 1. 定义一个接口，约束数据结构
interface UserInfo {
  id: number;
  name: string;
  role: 'Admin' | 'User' | 'Guest';
}

// 2. 定义一个类，实现复杂的业务逻辑
class UserManager {
  private users: UserInfo[] = [];

  constructor(public systemName: string) {
    console.log(`[${this.systemName}] 初始化成功！`);
  }

  // 添加用户的方法
  addUser(user: UserInfo): void {
    this.users.push(user);
    this.render();
  }

  // 一个模拟异步获取数据的方法（测试 ES6+ 语法）
  async fetchUserCount(): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.users.length), 500);
    });
  }

  // 将结果渲染到页面上（测试 DOM 操作）
  private render(): void {
    const root = document.querySelector('div'); // 对应你 index.html 里的 div
    if (root) {
      root.innerHTML = `
                <h3>系统：${this.systemName}</h3>
                <p>当前用户总数：${this.users.length}</p>
                <ul>
                    ${this.users.map(u => `<li>${u.name} - 身份: ${u.role}</li>`).join('')}
                </ul>
            `;
    }
  }
}

// 3. 实例化并运行
const myApp = new UserManager("TS 测试系统 v1.0");

myApp.addUser({ id: 1, name: "路人甲", role: "Admin" });
myApp.addUser({ id: 2, name: "代码猴子", role: "User" });

// 测试异步函数
myApp.fetchUserCount().then(count => {
  console.log("异步获取到的用户数:", count);
});