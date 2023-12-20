 // loadAssignment 함수 정의
  function loadAssignment(assignmentPath) {
    // assignmentContent 요소에 해당하는 HTML 파일의 내용을 가져와 설정
    fetch(assignmentPath)
      .then(response => response.text())
      .then(data => document.getElementById("assignmentContent").innerHTML = data)
      .catch(error => console.error('Error loading assignment:', error));
  }