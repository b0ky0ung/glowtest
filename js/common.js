class TestPage {
  constructor(data) {
    this.title = data.title;
    this.desc = data.description;
    this.testLength = data.data.length;
    this.startButton = data.startButtonText;
    this.current = 0;
    this.question = data.data;
    this.result = data.result;
    this.type = data.type;

    if (data.type === 'point') this.point = 0;

    this.init();
  }

  init() {
    document.querySelector('.title').innerHTML = this.title;
  
    // ✅ 초기 설명은 .intro_text에 출력
    document.querySelector('.intro_text').innerHTML = this.desc;
  
    document.querySelector('#question_length').innerHTML = `${this.testLength}문항`;
  
    const time = Math.trunc(this.testLength * 10 / 60);
    document.querySelector('#time').innerHTML = time > 0 ? `${time} ~ ${time * 2}분` : '1분 이내';
  
    document.querySelector('.start_btn').innerHTML = this.startButton || '시작하기';
    document.querySelector('.start_btn').addEventListener('click', () => this.start());
  }
  

  start() {
    
      // 기존 정보 숨기기
      document.querySelector('.information').style.display = 'none';
      document.querySelector('.intro').style.display = 'none';
    
      // 문제 영역 표시
      document.querySelector('#question-container').style.display = 'block';
    
      // 질문/지문 출력
      document.querySelector('.title').innerHTML = `Q${this.current + 1}.`;
      document.querySelector('#question').innerHTML = this.question[this.current].question;
      document.querySelector('#passage').innerHTML = this.question[this.current].passage || '';
      
    

      document.querySelector('.options_wrap').innerHTML = '';
      document.querySelector('.options_wrap').appendChild(button);
      

    const options = this.question[this.current].options;
    for (let i = 0; i < options.length; i++) {
      const button = document.createElement('button');
      button.className = 'option_btn';
      button.innerHTML = options[i].text;

      button.addEventListener('click', () => {
        if (this.type === "point") {
          this.point += options[i].score;
        }
        this.next();
      });

      document.querySelector('.button_wrap').appendChild(button);
    }
  }

  next() {
    if (this.current === this.testLength - 1) {
      this.getResult();
      return;
    }

    this.current++;
    document.querySelector('.title').innerHTML = `Q${this.current + 1}.`;

    // ✅ 지문과 질문 출력
    document.querySelector('#question').innerHTML = this.question[this.current].question;
    document.querySelector('#passage').innerHTML = this.question[this.current].passage || '';
    

    document.querySelector('.options_wrap').innerHTML = '';
    document.querySelector('.options_wrap').appendChild(button);


    const options = this.question[this.current].options;
    for (let i = 0; i < options.length; i++) {
      const button = document.createElement('button');
      button.className = 'option_btn';
      button.innerHTML = options[i].text;

      button.addEventListener('click', () => {
        if (this.type === "point") {
          this.point += options[i].score;
        }
        this.next();
      });

      document.querySelector('.button_wrap').appendChild(button);
    }
  }

  getResult() {
    const resultData = this.result.find(r =>
      this.point >= r.range[0] && this.point <= r.range[1]
    );

    const result = resultData || { title: '결과 없음', description: '점수 조건이 맞지 않음' };

    document.querySelector('.view_container').innerHTML = `
      <div class="result">
        <h2>${result.title}</h2>
        <p>${result.description}</p>
        <p class="detail">${result.detail || ''}</p>

        <div class="link-buttons">
          <a href="https://glelow.imweb.me/main?preview_mode=1" target="_blank">
            <button class="link-btn">glelow 웹사이트 가기</button>
          </a>
          <a href="https://www.youtube.com/channel/UCeL9JtKX8IwYerToSQ9Qraw?app=desktop" target="_blank">
            <button class="link-btn">YouTube 채널 보기</button>
          </a>
        </div>

        <button class="retry-btn" onclick="location.reload()">다시하기</button>

      </div>
    `;
  }
}
