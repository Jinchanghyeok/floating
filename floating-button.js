(function () {
  // 스타일 정의
  const style = document.createElement("style");
  style.textContent = `
        .floating-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
        }
        .floating-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
    `;
  document.head.appendChild(style);

  // 버튼 생성
  const button = document.createElement("button");
  button.className = "floating-btn";
  button.innerHTML = "↑";
  button.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  document.body.appendChild(button);
})();
