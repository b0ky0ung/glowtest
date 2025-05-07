const monkeyData = {
    title: "동물 문해력 테스트",
    description: "당신의 문해력과 닮은 동물을 찾아보세요!",
    type: "point",
    startButtonText: "테스트 시작",
    data: [
      {
        "question": "1. “그는 결국 이를 악물고 해냈다.”의 뜻은??",
        "options": [
          { "text": "이를 닦으며 끝냈다", "score": 0 },
          { "text": "억지로 참고 해냈다", "score": 1 },
          { "text": "입을 다물고 도망쳤다", "score": 0 },
          { "text": "이를 악용해서 성공했다", "score": 0 }
        ]
      },
      {
        "question": "2. 다음 중 단어 의미가 잘못 연결된 것은?",
        "options": [
          { "text": "분쟁 - 시끄럽고 복잡한 다툼", "score": 0 },
          { "text": "적용 - 알맞게 이용하거나 맞춤남", "score": 0 },
          { "text": "대등 - 비슷하거나 견줄 수 있음", "score": 0 },
          { "text": "조정 - 상대를 마음대로 다루는 일", "score": 1 }
        ]
      }
      // 추가 질문...
    ],
    result: [
      {
        "range": [0, 5],
        "title": "강아지? 🐶",
        "description": "느당신 혹시 우리집 뽀삐...? 🐾"
      },
      {
        "range": [6, 10],
        "title": "고양이",
        "description": "조용하고 매력적이에요 🐱"
      },
      {
        "range": [11, 15],
        "title": "불꽃",
        "description": "감정이 풍부하고 열정적이에요 🔥"
      }
    ]
  }
  window.monkeyData = monkeyData;
