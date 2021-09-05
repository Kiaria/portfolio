$(function(){

   $('.chart').easyPieChart({
          barColor: '#666',  //차트가 그려질 색
          trackColor: '#1c1c1c',  // 차트가 그려지는 트랙의 기본 배경색(chart1 의 회색부분)
          scaleColor: '#1c1c1c', // 차트 테두리에 그려지는 기준선 (chart2     의 테두리 선)
          lineCap: 'square', // 차트 선의 모양 chart1 butt / chart2 round / chart3 square
          lineWidth: 3, // 차트 선의 두께
          size: 200, // 차트크기
          animate: 1100, // 그려지는 시간 
          onStart: $.noop,
          onStop: $.noop

     });

});