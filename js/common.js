class TestPage {
    constructor(data) {
        this.title = data.title;
        this.desc = data.description;
        this.testLength = data.data.length;
        this.startButton = data.startButtonText;
        this.current = 0; // 현재 진행중인 문제 번호
        this.question = data.data;
        this.result = data.result;
        
        if(data.type === 'point') this.point = 0;
        
        this.init();
    }
    init(){
        document.querySelector('.title').innerHTML = this.title;
        document.querySelector('.description').innerHTML = this.desc;
        document.querySelector('#question_length').innerHTML = `${this.testLength}문항`;
        if(Math.trunc(this.testLength * 10 / 60) > 0){
            document.querySelector('#time').innerHTML = Math.trunc(this.testLength * 10 / 60) + ' ~ ' + Math.trunc(this.testLength * 20 / 60) + '분';
        }else{
            document.querySelector('#time').innerHTML = `1분 이내`;
        }
    
        document.querySelector('.start_btn').innerHTML = this.startButton || '시작하기';
        document.querySelector('.start_btn').addEventListener('click', () => {
            this.start();
        });
    
    }

  start() {
    // ① 문제 수와 예상 소요 시간 등을 보여주는 부분 숨기기
    document.querySelector('.information').style.display = 'none';
  
    // ② 현재 질문 번호를 .title 안에 넣기
    document.querySelector('.title').innerHTML = `Q${this.current + 1}.`;
  
    // ③ 질문 내용을 .description 안에 넣기
    document.querySelector('.description').innerHTML = this.question[this.current].question;
  
    // ④ 이전 버튼들을 제거 (버튼 영역 초기화)
    document.querySelector('.button_wrap').innerHTML = '';
  
    // ⑤ 현재 질문의 선택지 수만큼 버튼 만들기
    for(let i = 0; i < this.question[this.current].answerList.length; i++) {
      const button = document.createElement('button');  // 버튼 요소 생성
      button.innerHTML = this.question[this.current].answerList[i].answer;  // 버튼 안에 텍스트 삽입
  
      // ⑥ 버튼 클릭 시 처리할 이벤트 추가
      button.addEventListener('click', () => {
        if(this.type === "point") {
          // 점수형 테스트일 경우 점수 누적
          this.point += this.question[this.current].answerList[i].point;
        }
        // 다음 질문으로 넘어가기
        this.next();
      });
  
      // ⑦ 버튼을 화면에 추가
      document.querySelector('.button_wrap').appendChild(button);
    }
  }
  next() {
    if(this.current === this.testLength - 1){
        this.getResult();
        return;
    }

    this.current++;
    document.querySelector('.title').innerHTML = `Q${this.current + 1}.`;
    document.querySelector('.description').innerHTML = this.question[this.current].question;
    document.querySelector('.button_wrap').innerHTML = '';

    for(let i = 0; i < this.question[this.current].answerList.length; i++){
        const button = document.createElement('button');
        button.innerHTML = this.question[this.current].answerList[i].answer;
        button.addEventListener('click', () => {
            if(this.type === "point") this.point += this.question[this.current].answerList[i].point;
            this.next()
        });
        document.querySelector('.button_wrap').appendChild(button);
    }
    }
}
