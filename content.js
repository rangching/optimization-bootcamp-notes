// ============================================================
//  課程內容：《最佳化：驅動現代世界的數學引擎》EP1–EP2
//  欄位說明見 ~/.claude/skills/learning-series-pipeline/references/site_build.md
//  數學式用 KaTeX：行內 $...$，獨立 $$...$$。含反斜線的字串用 R`...`（String.raw）。
//  練習題答案皆以 Python（numpy／scipy）實際算過。
// ============================================================
const R = String.raw;

window.SERIES = {
  title: "最佳化：驅動現代世界的數學引擎",
  short: "最佳化",
  brand: "min<b>·</b>f(x)<span class=\"long\"> 最佳化學習網頁</span>",
  storeKey: "progress-series-45699f",
  eyebrow: "Optimization Bootcamp · 中文動畫學習系列 · 全 44 集路線",
  heroTitle: "在所有允許的選擇裡，<span class=\"hl\">哪一個最好？</span>",
  lead: "訓練大型語言模型、讓火箭垂直降落、排好上千架飛機的航班，全都能寫成同一行式子。這個系列用動畫一步一步拆開它：先看三題、再看影片、動手算一次，最後回頭再答一次。",
  tagline: "用動畫看懂最佳化：目標函數、限制條件、凸性與梯度。",
  heroLabel: "梯度下降互動動畫：小球沿負梯度方向滑進等高線地圖的谷底",
  description: "《最佳化：驅動現代世界的數學引擎》學習網頁：延續 Steve Brunton 的 Optimization Bootcamp，用動畫學目標函數、限制條件、凸性與梯度下降，附學習單、練習、背誦卡與測驗。",
  footer: "《最佳化：驅動現代世界的數學引擎》學習網頁 · 延續 Steve Brunton《Optimization Bootcamp》改編，畫面與講解全部重做 · 進度只存在這台裝置的瀏覽器裡",
  source: { name: "Steve Brunton《Optimization Bootcamp》", url: "https://youtu.be/lPBPbGmw1_4", license: "YouTube 標準授權：僅引用與改寫，畫面全部重做" },
  phases: [
    { id: 1, name: "階段 1｜最佳化入門營（Ch.1）", range: "EP1–EP2", desc: "先建立整體地圖：最佳化問題長什麼樣子、應用在哪裡，再把標準形式拆成目標函數、限制條件與可行域，學會判斷一個問題難不難。" }
  ]
};

window.UNITS = [
  // ---------------------------------------------------------- EP1
  {
    no: 1, id: "u01", phase: 1, tier: "Tier 1｜全貌與直覺",
    title: "最佳化導論：驅動現代世界的數學引擎",
    hook: "訓練模型、火箭降落、航班排程，為什麼都能寫成同一行式子？",
    tags: "標準形式、目標函數、限制條件、可行域、梯度下降、凸性、線性規劃、二次規劃",
    status: "done", estDur: "12:13", segWord: "小節",
    sections: [
      { t: 0, title: "開場" },
      { t: 51.67, title: "什麼是最佳化問題？" },
      { t: 154.7, title: "最佳化無所不在" },
      { t: 252.8, title: "目標函數的地形" },
      { t: 354.03, title: "凸性" },
      { t: 435.47, title: "線性規劃與二次規劃" },
      { t: 539.2, title: "非凸問題怎麼辦？" },
      { t: 590.6, title: "系列地圖與三個預告" },
      { t: 705.93, title: "總結" }
    ],
    formula: R`\min_{x}\; f(x)\quad \text{s.t.}\quad g_i(x)\le 0,\;\; h_j(x)=0`,
    pre: [
      { q: "你有 20 公尺的圍籬，要圍一塊長方形菜園。你猜怎麼圍面積最大？為什麼？",
        a: "圍成 5 公尺 × 5 公尺的正方形，面積 25 平方公尺。把寬度設為 $x$，長度就是 $10-x$，面積 $x(10-x)$ 是一條開口向下的拋物線，最高點在 $x=5$。" },
      { q: "「求最大」和「求最小」是兩種不同的問題嗎？",
        a: "本質上是同一件事。最大化 $f$ 等於最小化 $-f$：把曲線上下翻轉，最高點就變成最低點。所以習慣上一律寫成最小化。" },
      { q: "一顆球從山坡上任意一點放下，一定會滾到整片地形最低的地方嗎？什麼樣的地形才保證會？",
        a: "不一定。在崎嶇的地形上，球可能停在局部極小，結果取決於起點。只有碗形（凸）的地形，加上凸的可行域，才保證任何局部極小就是全域極小。" }
    ],
    terms: [
      { zh: "最佳化", en: "optimization", m: "", d: "在所有允許的選擇裡，找出最好的那一個。" },
      { zh: "決策變數", en: "decision variable", m: "x", d: "我們能調整的東西，例如菜園寬度、直線的斜率與截距、神經網路的權重。" },
      { zh: "目標函數", en: "objective function", m: "f(x)", d: "替每一個選擇打一個分數，我們希望它越小越好。" },
      { zh: "限制條件", en: "constraint", m: R`g_i(x)\le 0,\ h_j(x)=0`, d: "規定哪些選擇是允許的；分成不等式限制與等式限制。" },
      { zh: "可行域", en: "feasible region", m: "C", d: "所有滿足限制條件的 x 合起來的集合；最佳解只能在這裡面找。" },
      { zh: "全域極小", en: "global minimum", m: "", d: "整片地形裡最低的點。" },
      { zh: "局部極小", en: "local minimum", m: "", d: "只在附近最低的小山谷；換個起點可能停在不同的局部極小。" },
      { zh: "梯度", en: "gradient", m: R`\nabla f`, d: "指向函數上升最快的方向；一個變數時就是切線斜率。" },
      { zh: "梯度下降", en: "gradient descent", m: R`x_{k+1}=x_k-\eta\nabla f(x_k)`, d: "沿負梯度方向走一小步，不斷重複，往下坡找谷底。" },
      { zh: "隨機梯度下降", en: "stochastic gradient descent (SGD)", m: "", d: "每次只用一小批資料估計梯度；路徑會抖，但平均來說往下走。" },
      { zh: "凸函數", en: "convex function", m: "", d: "曲線上任取兩點連成的線段，永遠在曲線上方或剛好貼著。" },
      { zh: "凸集合", en: "convex set", m: "", d: "集合裡任取兩點，連線整條都留在集合裡。" },
      { zh: "線性規劃", en: "linear programming (LP)", m: R`\min\ c^\top x\ \ \text{s.t.}\ Ax\le b`, d: "目標函數與限制條件都是線性的；最佳解一定能在可行域的某個角上找到。" },
      { zh: "二次規劃", en: "quadratic programming (QP)", m: R`\min\ \tfrac12 x^\top Qx+c^\top x`, d: "目標函數是二次的、限制是線性的；等高線是一圈圈橢圓。" },
      { zh: "最小平方法", en: "least squares", m: R`\min\ \|Ax-b\|^2`, d: "把誤差平方加總後最小化；是沒有限制條件的二次規劃，可直接解出答案。" }
    ],
    practice: {
      intro: "以下每題都可以用紙筆算完，答案填數字即可（容許小數誤差）。",
      items: [
        { q: "把菜園的圍籬改成 30 公尺。長方形菜園的最大面積是多少平方公尺？", a: 56.25, tol: 0.01,
          hint: "寬度 $x$、長度 $15-x$，面積 $x(15-x)$ 的最高點在 $x=7.5$。" },
        { q: R`對 $f(x)=(x-3)^2$ 做梯度下降，起點 $x_0=0$，步長 $\eta=0.25$。走兩步後 $x_2$ 是多少？`, a: 2.25, tol: 0.001,
          hint: R`$f'(x)=2(x-3)$。$x_1=0-0.25\cdot2(0-3)=1.5$，再用 $x_1$ 算一次。` },
        { q: R`工廠生產 A、B 兩種產品，利潤 $3x+2y$。限制：$x+y\le 4$、$x+3y\le 6$、$x,y\ge 0$。最大利潤是多少？`, a: 12, tol: 0.001,
          hint: "線性規劃的最佳解在角落。把可行域的四個角 (0,0)、(4,0)、(3,1)、(0,2) 代進去比較。" },
        { q: "用最小平方法替三個點 (0, 1)、(1, 2)、(2, 4) 擬合一條直線 $y=ax+b$。斜率 $a$ 是多少？", a: 1.5, tol: 0.001,
          hint: R`斜率 $a=\dfrac{\sum (x_i-\bar x)(y_i-\bar y)}{\sum (x_i-\bar x)^2}$，其中 $\bar x=1$、$\bar y=7/3$。` },
        { q: "承上題，截距 $b$ 是多少？（四捨五入到小數第三位）", a: 0.833, tol: 0.002,
          hint: R`最小平方直線一定通過平均點：$b=\bar y-a\bar x=7/3-1.5$。` }
      ]
    },
    notes: [
      { h: "一句話記住", b: "最佳化＝在可行域裡，找讓目標函數最小的決策變數。所有應用只是換了不同的 $f$、$g$、$h$。" },
      { h: "三要素與標準形式", b: R`<p>任何最佳化問題都有三個零件：<b>決策變數</b> $x$（能調整什麼）、<b>目標函數</b> $f(x)$（怎麼評分）、<b>限制條件</b>（哪些選擇允許）。</p>
$$\min_{x} f(x)\quad\text{s.t.}\quad g_i(x)\le 0,\; h_j(x)=0$$
<p>求最大只要對 $-f$ 求最小，所以一律寫成最小化。滿足所有限制的 $x$ 合起來叫<b>可行域</b>。</p>` },
      { h: "地形、梯度與梯度下降", b: R`<p>目標函數可以想成一片地形。最低的谷底是全域極小，附近最低的小山谷是局部極小。</p>
<p>梯度 $\nabla f$ 指向上升最快的方向，負梯度永遠垂直於等高線、指向下坡最陡處。梯度下降：</p>
$$x_{k+1}=x_k-\eta\,\nabla f(x_k)$$
<p>在崎嶇的地形上，<b>起點決定結果</b>。資料太多時，每次只用一小批資料估計梯度，就是隨機梯度下降（SGD）。</p>` },
      { h: "真正的分水嶺：凸或非凸", b: R`<p>凸函數：任取兩點的弦都在曲線上方。凸集合：任兩點的連線都留在集合裡。</p>
<p>目標函數凸、可行域也凸 ⇒ <b>任何局部極小就是全域極小</b>。所以最佳化的分水嶺不是線性或非線性，而是凸或非凸。Brunton 的比喻：凸問題就像微分方程裡的線性方程式，是最有把握解決的一類。</p>` },
      { h: "兩類經典問題", b: R`<p><b>線性規劃</b>：每條線性限制像一把刀切掉半個平面，剩下的多邊形就是可行域；等利潤線往好的方向推，最後碰到的角就是最佳解。1947 年 Dantzig 的單純形法沿著邊一個角一個角地走。</p>
<p><b>二次規劃</b>：等高線是橢圓。中心在可行域外，最佳解落在邊界上（不一定是角）；中心在可行域內，最佳解就是中心。最小平方法是沒有限制的二次規劃。</p>` },
      { h: "非凸問題的三招", b: "<ol><li><b>SGD 的雜訊</b>：把球從淺淺的小山谷抖出來。</li><li><b>凸鬆弛</b>：換成附近一個凸問題先解，再回頭修正。</li><li><b>多起點</b>：從好幾個起點出發，挑最好的。</li></ol><p>經驗上，大型神經網路的許多局部極小表現差不多好：不一定要最好，夠好就能用（這是經驗觀察，不是定理）。</p>" },
      { h: "面對任何最佳化問題，先問四件事", b: "<ol><li>我能調整什麼？（決策變數）</li><li>怎麼評分？（目標函數）</li><li>有哪些限制？（限制條件）</li><li>它是凸的嗎？（決定好不好解）</li></ol>" },
      { h: "2026 年現況補充（影片中的青色框）", b: `<ul>
<li>大型語言模型訓練主流仍是 AdamW；Kimi K2、GLM-4.5 等開源模型改用 Muon 最佳化器。出處：<a href="https://arxiv.org/abs/2502.16982" target="_blank" rel="noopener">Muon is Scalable for LLM Training</a>。</li>
<li>線性規劃上 GPU：PDLP 已進入開源 HiGHS 與 NVIDIA cuOpt（2025 年以 Apache 2.0 開源）。出處：<a href="https://blogs.nvidia.com/blog/cuopt-open-source" target="_blank" rel="noopener">NVIDIA cuOpt</a>。</li>
<li>事件視界望遠鏡是地面電波望遠鏡網，不是衛星；M87*（2019）與人馬座 A*（2022）影像以「吻合資料＋先驗知識」的最佳化重建。出處：<a href="https://arxiv.org/abs/1906.11241" target="_blank" rel="noopener">First M87 EHT Results IV</a>。</li>
<li>Boeing 787 比所取代的機型省油約 20～25%。出處：<a href="https://www.boeing.com/Commercial/787/by-design" target="_blank" rel="noopener">Boeing</a>。</li>
<li>配套教科書已於 2026 年由 Cambridge University Press 出版，附 Python 程式碼。出處：<a href="https://www.cambridge.org/core/books/optimization/D030795E11729431A9381DC612EE7602" target="_blank" rel="noopener">Cambridge University Press</a>。</li>
</ul>` },
      { h: "延伸閱讀", b: `<p>原始影片：<a href="https://youtu.be/lPBPbGmw1_4" target="_blank" rel="noopener">Steve Brunton〈Optimization: A Bootcamp for Machine Learning, Inverse Problems, and Control〉</a>（英文，22:27）。本集依原片整理改編，加入圍籬例子、可動的擬合動畫與 2026 年現況；畫面與講解全部重做。</p>` }
    ],
    quiz: [
      { q: "菜園問題裡，「面積」扮演最佳化問題的哪個角色？", o: ["決策變數", "目標函數", "限制條件", "可行域"], a: 1,
        w: "面積替每一個寬度打分數，是目標函數；寬度才是決策變數，圍籬長度 20 公尺是限制條件。" },
      { q: "想要最大化利潤 $P(x)$，寫成標準形式時應該怎麼做？", o: ["改成最小化 $1/P(x)$", "改成最小化 $-P(x)$", "標準形式無法表示最大化", "把 $P(x)$ 放進限制條件"], a: 1,
        w: "最大化 $P$ 等於最小化 $-P$，曲線上下翻轉，最高點變成最低點。" },
      { q: "在一維函數上，負梯度方向代表什麼？", o: ["函數上升最快的方向", "沿著等高線的方向", "函數下降最快的方向", "指向全域極小的方向"], a: 2,
        w: "梯度指向上升最快的方向，負梯度就是下降最快的方向；但它只看局部，不保證指向全域極小。" },
      { q: "下列哪一種情況，保證找到的任何局部極小就是全域極小？", o: ["目標函數可微", "目標函數凸、可行域也凸", "變數只有兩個", "使用隨機梯度下降"], a: 1,
        w: "凸目標函數加上凸可行域，才有「局部即全域」的保證。可微或維度低都不夠。" },
      { q: "C 字形的區域為什麼不是凸集合？", o: ["它的邊界是曲線", "它沒有角", "有兩點的連線會跑出集合外面", "它的面積太小"], a: 2,
        w: "凸集合要求任兩點的連線整條留在集合裡；C 字形缺口兩側的點連起來會穿過外面。圓盤也有曲線邊界，但它是凸的。" },
      { q: "線性規劃的最佳解，一定可以在可行域的哪裡找到？", o: ["正中心", "某個角（頂點）", "任何內部點", "離原點最遠的點"], a: 1,
        w: "等利潤線往好的方向推，最後碰到可行域的地方一定包含某個角，這也是單純形法沿角走的直覺。" },
      { q: "訓練神經網路通常是哪一類問題？", o: ["線性規劃", "凸的二次規劃", "非凸最佳化", "沒有目標函數的問題"], a: 2,
        w: "神經網路的損失幾乎一定是非凸的，沒有局部即全域的保證；實務上靠 SGD、多起點等方法，找到「夠好」的解。" }
    ],
    next: "EP2 把標準形式拆成一張解剖圖：min 和 argmin 差在哪？鬆弛變數怎麼認出角落？是哪五件事讓一個最佳化問題變難？"
  },
  // ---------------------------------------------------------- EP2
  {
    no: 2, id: "u02", phase: 1, tier: "Tier 1｜拆解零件",
    title: "拆解最佳化問題：一張解剖圖看懂每個零件",
    hook: "同樣一行式子，為什麼有的問題一秒解完、有的要花一萬美元才算得出一個點？",
    tags: "min／argmin、鞍點、梯度、Ax≤b、凸多面體、鬆弛變數、病態條件、半正定、CVXPY",
    status: "done", estDur: "13:10", segWord: "小節",
    sections: [
      { t: 0, title: "開場" },
      { t: 42.77, title: "目標函數" },
      { t: 150.13, title: "目標函數的地形" },
      { t: 267.63, title: "限制條件與可行域" },
      { t: 423.6, title: "讓問題變難的五件事" },
      { t: 601.3, title: "線性規劃與二次規劃" },
      { t: 750.37, title: "總結" }
    ],
    formula: R`\begin{gathered} x^\star=\operatorname*{arg\,min}_{x\in C} f(x) \\ C=\{x : g_i(x)\le 0,\ h_j(x)=0\} \end{gathered}`,
    pre: [
      { q: "寫下「最小化 $f$」時，答案應該是「最低的分數」還是「最低點的位置」？兩者有什麼不同？",
        a: "兩者都可能。$\\min f$ 是最小值（從縱軸讀出的分數），$\\arg\\min f$ 是讓 $f$ 最小的 $x$（從橫軸讀出的位置）。實務上常兩個都要：例如訓練神經網路，真正帶走的是權重（argmin），損失值只用來確認夠小。" },
      { q: "梯度等於零的點，一定是谷底嗎？",
        a: "不一定。梯度為零只代表「候選人」：可能是谷底（極小）、山頂（極大），或鞍點（某個方向是谷底、另一個方向是山頂）。" },
      { q: "如果每個變數只試 10 個值，6 個變數要試幾次？這說明了什麼？",
        a: "$10^6$ 次，一百萬次。每多一個變數就乘以 10，維度一高，暴力搜尋完全不可能，只能靠梯度等資訊有方向地找。" }
    ],
    terms: [
      { zh: "最小值", en: "min", m: R`\min_x f(x)`, d: "最低點有多低：f 的最小分數，從縱軸讀出來。" },
      { zh: "最小化引數", en: "argmin", m: R`\arg\min_x f(x)`, d: "最低點在哪裡：讓 f 最小的那個 x，從橫軸讀出來。" },
      { zh: "最佳解", en: "optimal solution", m: R`x^\star`, d: "讓目標函數在可行域內最小的決策變數。" },
      { zh: "純量", en: "scalar", m: "", d: "單一個數字；目標函數的輸出永遠只有一個分數。" },
      { zh: "鞍點", en: "saddle point", m: "", d: "梯度為零，但沿某個方向是谷底、沿另一個方向是山頂，像馬鞍的中心。" },
      { zh: "偏微分", en: "partial derivative", m: R`\partial f/\partial x_1`, d: "只動一個變數、其他固定時，f 的變化率；n 個偏微分排起來就是梯度。" },
      { zh: "線性不等式組", en: "system of linear inequalities", m: R`Ax\le b`, d: "逐列比較：每一列都是一條不等式，每一條都要成立。" },
      { zh: "凸多面體", en: "convex polytope", m: "", d: "由線性不等式圍出的區域，一定是凸的，而且有尖尖的角；多邊形在 n 維的推廣。" },
      { zh: "鬆弛變數", en: "slack variable", m: R`s=b-Ax\ge 0`, d: "離每一道牆還有多遠；貼到牆上時等於零，角落有兩個同時為零。" },
      { zh: "非線性限制", en: "nonlinear constraint", m: R`x^2+y^2\le 1`, d: "曲線圍出的限制；把 ≤ 換成 =，可行域會從實心圓盤縮成一圈圓周。" },
      { zh: "維度災難", en: "curse of dimensionality", m: R`10^n`, d: "每個變數試 10 個值，n 個變數就要試 10ⁿ 次，暴力搜尋迅速變得不可能。" },
      { zh: "病態條件", en: "ill-conditioned", m: R`\kappa=\lambda_{\max}/\lambda_{\min}`, d: "碗被壓扁，一個方向很陡、一個方向很平，梯度下降會之字形震盪、走得很慢。" },
      { zh: "無梯度方法", en: "derivative-free optimization", m: "", d: "不需要梯度的方法，例如 Nelder–Mead、貝氏最佳化；用在不可微或寫不出公式的 f。" },
      { zh: "貝氏最佳化", en: "Bayesian optimization", m: "", d: "評估 f 很貴時，用模型挑出最值得試的下一組 x，以最少次數找到夠好的答案。" },
      { zh: "半正定", en: "positive semidefinite (PSD)", m: R`Q\succeq 0`, d: "Q 沒有負的特徵值；此時 xᵀQx 是碗形，二次規劃是凸的。" },
      { zh: "規範凸規劃", en: "disciplined convex programming (DCP)", m: "", d: "CVXPY 用來檢查問題是否為凸的一組組合規則，通過才交給求解器。" }
    ],
    practice: {
      intro: "以下每題答案填數字（容許小數誤差）。這幾題的數字都用 SciPy／NumPy 驗算過。",
      items: [
        { q: R`$f(x)=(x-2)^2+1$。它的 argmin（最佳的 $x$）是多少？`, a: 2, tol: 0.001,
          hint: "平方項最小是 0，發生在 $x-2=0$ 的地方。這就是 SciPy 回傳的 res.x。" },
        { q: R`承上題，$f$ 的最小值 min 是多少？`, a: 1, tol: 0.001,
          hint: "把 argmin 代回 $f$。這就是 SciPy 回傳的 res.fun。" },
        { q: R`限制條件 $x+y\le 4$、$x+3y\le 6$。在點 $(x,y)=(4,0)$，第二條限制的鬆弛量 $s_2=6-(x+3y)$ 是多少？`, a: 2, tol: 0.001,
          hint: "第一條 $s_1=4-(4+0)=0$，表示點貼在第一道牆上；第二條同樣用 b 減 Ax。SciPy linprog 會回傳 slack=[0, 2]。" },
        { q: "每個變數試 10 個值做格點搜尋，6 個變數一共要評估 f 幾次？", a: 1000000, tol: 0.5,
          hint: "$10\\times10\\times\\cdots$，一共乘 6 次。" },
        { q: R`對被壓扁的碗 $f=\tfrac12(x^2+10y^2)$ 做固定步長梯度下降，步長 $\eta$ 小於多少才不會發散？`, a: 0.2, tol: 0.001,
          hint: R`陡的方向 $y_{k+1}=(1-10\eta)\,y_k$，需要 $|1-10\eta|<1$。實測 $\eta=0.19$ 收斂、$\eta=0.21$ 發散。` },
        { q: R`最小平方的 $A=\begin{bmatrix}1&0\\1&1\\1&2\end{bmatrix}$，$Q=A^\top A=\begin{bmatrix}3&3\\3&5\end{bmatrix}$。$Q$ 較小的特徵值是多少？（到小數第三位）`, a: 0.838, tol: 0.002,
          hint: R`特徵值 $\lambda=4\pm\sqrt{1+9}=4\pm\sqrt{10}$。兩個都大於 0，所以 Q 半正定，最小平方是凸的。` }
      ]
    },
    notes: [
      { h: "一句話記住", b: "一個最佳化問題＝一個目標函數＋一組圍出可行域的限制條件；每個零件的「質地」決定問題有多難。" },
      { h: "目標函數：旋鈕、黑盒子、一個分數", b: R`<p>決策變數 $x$ 像一排旋鈕，可以有一個、兩個，或一兆個（2026 年的 Kimi K2 總參數約 1 兆）。$f$ 把它們變成<b>一個純量分數</b>。</p>
<p><b>min</b> 是分數（縱軸），<b>argmin</b> 是位置（橫軸）。SciPy 的 <code>minimize</code> 回傳 <code>res.x</code>（argmin）與 <code>res.fun</code>（min）。</p>` },
      { h: "地形：凸、非凸與鞍點", b: R`<p>最小平方的誤差是碗（凸），只有一個谷底；神經網路的誤差通常非凸，有很多局部極小與極大。高維地形還有<b>鞍點</b>：一個方向是谷底，另一個方向是山頂。</p>
<p>$\nabla f=0$ 只是候選人。找谷底兩條路：直接解 $\nabla f=0$（最小平方可以），或沿負梯度一步步走（神經網路只能這樣，而且用小批次估計＝SGD）。</p>` },
      { h: "限制條件與可行域", b: R`<p>每條線性不等式切掉半個平面。例：$x\ge0$、$y\ge0$、$y\le 2/3$、$x+y\le1$ 圍出區域 $C$，後兩條寫成 $Ax\le b$，向量比大小是<b>逐列比較</b>。</p>
<p>線性不等式圍出的一定是<b>凸多面體</b>。鬆弛變數 $s=b-Ax$ 量的是離牆多遠；角落有兩個 $s$ 同時為零，單純形法就靠它從一個角走到下一個角。</p>
<p>非線性限制：$x^2+y^2\le1$ 是實心圓盤，$=1$ 只剩圓周，<b>等式限制通常嚴格得多</b>。可行域也分凸與非凸；像八爪魚一樣多觸手的可行域，每隻觸手末端都可能藏著候選解。</p>` },
      { h: "讓問題變難的五件事", b: R`<ol>
<li><b>凸或非凸</b>：目標函數和可行域都凸，整個問題才凸；凸問題大致已被解決。</li>
<li><b>算一次 f 的代價</b>：神經網路很便宜；超合金實驗或 F1 前翼測試很貴（Brunton 估計一次可能一萬美元），改用貝氏最佳化、自主實驗室。</li>
<li><b>維度</b>：每個變數試 10 個值，n 個變數要 $10^n$ 次。</li>
<li><b>病態條件</b>：壓扁的碗讓梯度下降之字形震盪；Adam、Muon 依方向調整步長，可理解為對付一陡一平的地形。</li>
<li><b>拿得到梯度嗎</b>：有梯度（甚至二階導數）最好；不可微就用 Nelder–Mead 等無梯度方法；梯度太貴就用 SGD 估計。</li>
</ol>` },
      { h: "LP 與 QP 的形狀", b: R`<p><b>線性規劃</b> $\min c^\top x$：等值線是直線，推到最後碰到的角就是最佳解，一定是凸問題。</p>
<p><b>二次規劃</b> $\min \tfrac12 x^\top Qx+c^\top x$：$Q$ 決定碗的形狀。$Q\succeq0$ 時等高線是橢圓（凸）；特徵值變負，橢圓裂成雙曲線、中間成了鞍點（非凸）。</p>
<p>最小平方 $\|Ax-b\|^2$ 展開後 $Q=A^\top A$，而 $x^\top A^\top Ax=\|Ax\|^2\ge0$，所以 Q 永遠半正定，<b>最小平方一定是凸的</b>。</p>` },
      { h: "程式碼就是解剖圖：CVXPY", b: `<pre><code>import cvxpy as cp
x = cp.Variable(n)                         # 決策變數
obj = cp.Minimize(cp.sum_squares(A @ x - b))  # 目標函數（QP）
cons = [C @ x &lt;= d, x &gt;= 0]               # 限制條件 → 可行域
prob = cp.Problem(obj, cons)
prob.is_dcp()   # 先用 DCP 規則確認是凸的
prob.solve()
x.value         # argmin
prob.value      # min</code></pre>
<p>2026 年的 CVXPY 1.9 還能改用 GPU 求解器（cuOpt、PDLP 等），並新增非線性問題選項；但「先問它是不是凸的」仍是核心。</p>` },
      { h: "拿到問題的檢查清單", b: "<p><b>目標函數</b>：凸不凸？算一次貴不貴？維度多高？有沒有梯度？</p><p><b>限制條件</b>：是線性的嗎？圍出來的可行域是凸的嗎？</p><p>答案告訴你它是 LP、QP、一般凸問題，還是困難的非凸問題，也決定該用哪種方法。</p>" },
      { h: "2026 年現況補充（影片中的青色框）", b: `<ul>
<li>Kimi K2 總參數約 1 兆（MoE，每個 token 啟用約 320 億），以 MuonClip 訓練。出處：<a href="https://arxiv.org/abs/2507.20534" target="_blank" rel="noopener">Kimi K2 (arXiv 2507.20534)</a>。</li>
<li>2026 年 F1 空力測試限制：風洞與 CFD 配額依上季排名決定，冠軍 70%、最後一名 115%。出處：<a href="https://the-race.com/formula-1/the-aero-restrictions-each-f1-team-will-face-in-2026" target="_blank" rel="noopener">The Race</a>。</li>
<li>自主實驗室以機器人做實驗、多半用貝氏最佳化挑下一個實驗。出處：<a href="https://arxiv.org/pdf/2508.06642" target="_blank" rel="noopener">Benchmarking Self-Driving Labs</a>。</li>
<li>SciPy <code>linprog</code> 預設 HiGHS，回傳 <code>res.slack</code>＝b − Ax；CVXPY 1.9.3 支援 GPU 求解器與 <code>nlp</code> 選項。</li>
</ul>` },
      { h: "延伸閱讀", b: `<p>原始影片：<a href="https://youtu.be/WK4p445iQzI" target="_blank" rel="noopener">Steve Brunton〈The Anatomy of an Optimization Problem〉</a>（英文，25:35）。本集依原片整理改編，補上鞍點剖面、鬆弛變數長條、特徵值滑桿與程式對照；畫面與講解全部重做。</p>` }
    ],
    quiz: [
      { q: "訓練神經網路時，我們最終「帶走」的是哪一個？", o: ["min：最低的損失值", "argmin：訓練好的權重", "梯度的大小", "可行域的面積"], a: 1,
        w: "真正要用的是權重，也就是 argmin；損失值只用來確認它夠小。" },
      { q: "某點的梯度等於零，可以確定什麼？", o: ["它一定是全域極小", "它一定是局部極小", "它只是候選點：可能是極小、極大或鞍點", "函數在這裡不可微"], a: 2,
        w: "梯度為零只代表切線（切平面）是平的；谷底、山頂和鞍點都滿足。" },
      { q: "兩個向量的不等式 $Ax\\le b$ 是什麼意思？", o: ["$Ax$ 的長度小於 $b$ 的長度", "每一列都要成立：$(Ax)_i\\le b_i$", "只要有一列成立即可", "$Ax$ 的總和小於 $b$ 的總和"], a: 1,
        w: "向量不等式是逐列比較，每一列都是一條限制，每一條都要成立。" },
      { q: "在二維的線性規劃可行域裡，一個點恰好位在某個角落時，鬆弛變數（含 x、y 本身）會怎樣？", o: ["全部為零", "恰好有兩個為零", "全部為正", "全部為負"], a: 1,
        w: "角落是兩道牆的交點，所以有兩個值同時為零；單純形法就是這樣認出角落。" },
      { q: "設計超合金時，每試一組成分要煉製與測試一次，最適合哪種策略？", o: ["每個變數試 100 個值的格點搜尋", "用貝氏最佳化挑最值得試的下一組", "隨機梯度下降跑上萬次", "解析解 $\\nabla f=0$"], a: 1,
        w: "評估 f 很貴時，目標是用最少次數找到夠好的答案，貝氏最佳化正是為此設計；梯度下降需要大量評估與梯度。" },
      { q: "等高線是很扁的橢圓時，固定步長的梯度下降會出現什麼現象？", o: ["一步就到谷底", "在陡的方向來回震盪、在平的方向走得很慢", "完全不動", "一定收斂到鞍點"], a: 1,
        w: "這就是病態條件。Adam、Muon 依方向調整步長，可理解為對付這種一陡一平的地形。" },
      { q: "為什麼最小平方問題一定是凸的？", o: ["因為它沒有限制條件", "因為 $Q=A^\\top A$ 永遠半正定", "因為資料點很少", "因為它是線性規劃"], a: 1,
        w: "$x^\\top A^\\top A x=\\|Ax\\|^2\\ge 0$，所以 $Q$ 沒有負特徵值，碗口永遠朝上。沒有限制本身不保證凸。" },
      { q: "CVXPY 的 DCP 規則在做什麼？", o: ["自動挑選最快的 GPU", "在求解前檢查問題是不是凸的", "把非凸問題轉成凸問題", "計算梯度"], a: 1,
        w: "DCP 是一套組合規則，用來確認問題是凸的；通過才交給求解器。它不會把非凸問題變成凸的。" }
    ],
    next: "下一集起進入系列的深入部分：從梯度與凸性的幾何直覺開始，再到梯度下降、隨機梯度下降與牛頓法。（製作中）"
  }
];

// ============================================================
//  完整學習路線（依教科書 10 個部分與各小節規劃，2026-11-14）
//  來源：Brunton《Optimization》書目（Cambridge 2026）與 YouTube 播放清單
//  status：done＝影片完成；ready＝原片已公開、待製作；planned＝原片尚未公開
//  lectures：對應的原片 [編號, YouTube ID, 原片標題, 片長]
//  注意：觀眾可見文字用「小節／步驟」，教科書以「Ch.」「§」標示
// ============================================================
window.ROADMAP = {
  asOf: "2026-11-14",
  playlist: "https://www.youtube.com/playlist?list=PLMrJAkhIeNNS3UT10txhV70ZwIeIjkMQp",
  book: { name: "Optimization: A Bootcamp for Machine Learning, Inverse Problems, and Control（Cambridge University Press, 2026）", url: "https://www.cambridge.org/core/books/optimization/D030795E11729431A9381DC612EE7602" },
  note: "原播放清單共 44 支，其中 15 支已公開並有正式標題、14 支為未公開列出的梯度方法影片、15 支尚未公開。尚未公開的部分先依教科書小節排定，原片公開後再調整。",
  phases: [
    { id: 1, ch: 1, name: "最佳化入門營", en: "Optimization Bootcamp", desc: "建立整體地圖：問題的零件、應用、凸性、梯度與限制條件。", eps: [
      { no: 1, unit: "u01", title: "最佳化導論：驅動現代世界的數學引擎", sec: "總覽", status: "done", lectures: [[1, "lPBPbGmw1_4", "Optimization: A Bootcamp for Machine Learning, Inverse Problems, and Control", "22:28"]] },
      { no: 2, unit: "u02", title: "拆解最佳化問題：一張解剖圖看懂每個零件", sec: "§1.1", status: "done", lectures: [[2, "WK4p445iQzI", "The Anatomy of an Optimization Problem", "25:36"]] },
      { no: 3, title: "最佳化的應用：機器學習、逆問題與控制", sec: "§1.5", status: "ready", lectures: [[3, "CS1wrmxiWqc", "Applications of Optimization", "25:23"]] },
      { no: 4, title: "凸性入門：凸集合與保持凸性的運算", sec: "§1.2", status: "ready", lectures: [[4, "9WXVgQFFsDI", "Convexity 101", "14:58"], [5, "eUhnyZ--kGY", "Convex Sets", "14:25"], [6, "npVcj7AJRcg", "Intersections of Convex Sets are Convex", "9:12"], [7, "MCE2D6atrzE", "Affine Transformations and Convexity", "6:29"]] },
      { no: 5, title: "支撐超平面與凸函數：範數、激活函數為什麼是凸的", sec: "§1.2", status: "ready", lectures: [[8, "VrdkzCiLe0s", "Dual Space of Supporting Hyperplanes", "8:45"], [9, "l5OUNaVdxqs", "Convex Functions", "16:35"], [10, "41SnCWFtTnU", "Norms are Convex", "18:51"], [11, "OCXigVQ6r9o", "Activation Functions in Machine Learning", "6:40"]] },
      { no: 6, title: "Jensen 不等式與「局部極小就是全域極小」", sec: "§1.2", status: "ready", lectures: [[12, "GWuAGTjfRs8", "Jensen's Inequality", "14:22"], [13, "Ab4WatONh9E", "Properties of Convex Functions", "11:39"], [14, "D-Qy9QfJgQg", "Convexity Implies that Local Minima are Global Minima", "20:26"], [15, "Nadc25QqVTw", "Convex Feasible Sets", "9:41"]] },
      { no: 7, title: "梯度與最佳化的幾何", sec: "§1.3", status: "planned", lectures: [] },
      { no: 8, title: "限制條件與 Lagrange 乘數", sec: "§1.4", status: "planned", lectures: [] }
    ] },
    { id: 2, ch: 2, name: "梯度方法", en: "Gradient Based Optimization", desc: "從梯度下降出發，一路到動量、Adam、牛頓法與擬牛頓法。原播放清單已有 14 支未公開列出的梯度影片。", eps: [
      { no: 9, title: "梯度下降：步長、收斂與病態條件", sec: "§2.1", status: "planned", lectures: [] },
      { no: 10, title: "動量法：讓球帶著慣性滾下山", sec: "§2.2", status: "planned", lectures: [] },
      { no: 11, title: "隨機梯度下降與 Adam", sec: "§2.3", status: "planned", lectures: [] },
      { no: 12, title: "牛頓法與線搜尋", sec: "§2.4–2.5", status: "planned", lectures: [] },
      { no: 13, title: "擬牛頓法 BFGS 與梯度的向量微積分恆等式", sec: "§2.6–2.7", status: "planned", lectures: [] }
    ] },
    { id: 3, ch: 3, name: "線性規劃", en: "Linear Programming", desc: "多面體、頂點與單純形法；對偶與整數規劃為什麼突然變難。", eps: [
      { no: 14, title: "線性規劃：問題寫法與多面體的高維幾何", sec: "§3.1–3.2", status: "planned", lectures: [] },
      { no: 15, title: "Dantzig 單純形法與單純形表", sec: "§3.3–3.4", status: "planned", lectures: [] },
      { no: 16, title: "線性規劃的對偶，與整數規劃的 NP 困難", sec: "§3.5–3.6", status: "planned", lectures: [] }
    ] },
    { id: 4, ch: 4, name: "最小平方迴歸", en: "Least-Squares Regression", desc: "SVD、正則化、二次規劃，再到非線性最小平方與共軛梯度。", eps: [
      { no: 17, title: "最小平方迴歸與奇異值分解（SVD）", sec: "§4.1–4.2", status: "planned", lectures: [] },
      { no: 18, title: "最小範數解、條件數與正則化", sec: "§4.3–4.4", status: "planned", lectures: [] },
      { no: 19, title: "有限制的最小平方與二次規劃", sec: "§4.5–4.6", status: "planned", lectures: [] },
      { no: 20, title: "Gauss–Newton 法與共軛梯度法", sec: "§4.7–4.8", status: "planned", lectures: [] }
    ] },
    { id: 5, ch: 5, name: "非光滑與全域最佳化", en: "Nonsmooth and Global Optimization", desc: "沒有梯度、或地形太崎嶇時：近端方法、無梯度搜尋與群體演算法。", eps: [
      { no: 21, title: "近端梯度演算法：處理不可微的目標函數", sec: "§5.1", status: "planned", lectures: [] },
      { no: 22, title: "Nelder–Mead 下坡單純形與模擬退火", sec: "§5.2–5.3", status: "planned", lectures: [] },
      { no: 23, title: "演化演算法與分散式群體最佳化", sec: "§5.4–5.5", status: "planned", lectures: [] }
    ] },
    { id: 6, ch: 6, name: "限制條件與對偶", en: "Constraints and Duality", desc: "Lagrange、KKT、對偶、內點法、ADMM，以及變分法。", eps: [
      { no: 24, title: "Lagrange 乘數：等高線與限制線相切", sec: "§6.1", status: "planned", lectures: [] },
      { no: 25, title: "KKT 條件：不等式限制的最佳性", sec: "§6.2", status: "planned", lectures: [] },
      { no: 26, title: "對偶：每個最佳化問題都有一個影子問題", sec: "§6.3", status: "planned", lectures: [] },
      { no: 27, title: "內點法與 ADMM", sec: "§6.4–6.5", status: "planned", lectures: [] },
      { no: 28, title: "變分法與 Euler–Lagrange 方程式", sec: "§6.6", status: "planned", lectures: [] }
    ] },
    { id: 7, ch: 7, name: "貝氏建模與估計", en: "Bayesian Modeling and Estimation", desc: "把估計寫成最佳化：最大概似、貝氏推論、EM 與高斯混合模型。", eps: [
      { no: 29, title: "統計參數估計與貝氏推論", sec: "§7.1–7.2", status: "planned", lectures: [] },
      { no: 30, title: "密度估計、經驗先驗與 EM／高斯混合模型", sec: "§7.3–7.4", status: "planned", lectures: [] },
      { no: 31, title: "從統計估計看最小平方迴歸", sec: "§7.5", status: "planned", lectures: [] }
    ] },
    { id: 8, ch: 8, name: "逆問題中的最佳化", en: "Optimization for Inverse Problems", desc: "從結果反推原因：醫學影像、計算成像、PDE 限制反演與系統識別。", eps: [
      { no: 32, title: "逆問題的數學形式與經典例子", sec: "§8.1–8.2", status: "planned", lectures: [] },
      { no: 33, title: "醫學影像與計算成像", sec: "§8.3–8.4", status: "planned", lectures: [] },
      { no: 34, title: "結合物理的影像反演與 PDE 限制反演", sec: "§8.5–8.6", status: "planned", lectures: [] },
      { no: 35, title: "系統識別：從資料找出動態模型", sec: "§8.7", status: "planned", lectures: [] }
    ] },
    { id: 9, ch: 9, name: "控制中的最佳化", en: "Optimization for Control", desc: "LQR、非線性最優控制、動態規劃、強化學習、MPC 與 LMI。", eps: [
      { no: 36, title: "線性最優控制：LQR 與 Riccati 方程式", sec: "§9.1", status: "planned", lectures: [] },
      { no: 37, title: "非線性最優控制與動態規劃", sec: "§9.2、§9.4", status: "planned", lectures: [] },
      { no: 38, title: "強化學習：用最佳化學會決策", sec: "§9.3", status: "planned", lectures: [] },
      { no: 39, title: "模型預測控制與線性矩陣不等式", sec: "§9.5–9.6", status: "planned", lectures: [] }
    ] },
    { id: 10, ch: 10, name: "機器學習中的最佳化", en: "Optimization for Machine Learning", desc: "自動微分、反向傳播、神經網路訓練、深度強化學習與物理約束學習。", eps: [
      { no: 40, title: "自動微分：電腦怎麼算出梯度", sec: "§10.1", status: "planned", lectures: [] },
      { no: 41, title: "反向傳播", sec: "§10.2", status: "planned", lectures: [] },
      { no: 42, title: "神經網路訓練的最佳化", sec: "§10.3", status: "planned", lectures: [] },
      { no: 43, title: "深度強化學習", sec: "§10.4", status: "planned", lectures: [] },
      { no: 44, title: "物理約束的機器學習", sec: "§10.5", status: "planned", lectures: [] }
    ] }
  ]
};
