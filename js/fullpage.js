$(function() {
    new fullpage("#fullpage", {
        sectionsColor: [],  // 구역별 background-color 정의
        verticalCentered: false, // 구역 내 컨텐츠가 수직으로 중심에 위치
        scrollBar: true, // 스크롤 바 사용여부
        anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4', 'anchor5', 'anchor6'], // 각 구역별 앵커 링크를 정의
        menu: '#menu', // 선택자를 사용하여 링크할 메뉴를 구체적으로 정할 수 있다
        scrollingSpeed: 200, // 스크롤 이동속도 조절
    });
})