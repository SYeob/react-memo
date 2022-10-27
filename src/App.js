import { useState } from "react";
import "./App.css";

function App() {
  let [list, setlist] = useState(["남자 코트 추천", "강남 우동맛집", "파이썬독학"]);
  let [like, likeChange] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [inputValue, setInputValue] = useState("");

  // 현재 날짜
  let year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  let day = new Date().getDate();
  let nowTime = String(year) + "년 " + String(month) + "월 " + String(day) + "일";
  console.log(nowTime);

  return (
    <div className="App">
      <div className="black-nav">
        <div>React Memo</div>
      </div>
      {list.map(function (a, i) {
        return (
          <div
            className="list"
            key={i}
          >
            <div>
              <h4
                onClick={() => {
                  setModal(true);
                  setTitle(i);
                }}
              >
                {list[i]}{" "}
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    let copy = [...like];
                    copy[i] = copy[i] + 1;
                    likeChange(copy);
                  }}
                >
                  👍
                </span>
                {like[i]}
              </h4>
              <p>{nowTime}</p>
            </div>
            <div>
              <button
                className="deleteBtn"
                onClick={() => {
                  let copy = [...list];
                  copy.splice(i, 1);
                  setlist(copy);
                }}
              >
                삭제
              </button>
            </div>
          </div>
        );
      })}

      <input
        className="publish"
        onChange={(e) => {
          setInputValue(e.target.value);
          console.log(inputValue);
        }}
      />
      <button
        className="updateList"
        onClick={() => {
          let copy = [...list];
          copy.unshift(inputValue);
          setlist(copy);
        }}
      >
        저장
      </button>

      {modal == true ? (
        <Modal
          list={list}
          setlist={setlist}
          title={title}
        ></Modal>
      ) : null}
    </div>
  );

  function Modal(props) {
    return (
      <div className="modal">
        <h4>{props.list[title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button
          onClick={() => {
            setModal(!true);
          }}
        >
          닫기
        </button>
      </div>
    );
  }

  // function Post() {
  //   return (
  //     <div className="list">
  //       <h4>{list[2]}</h4>
  //       <p>2월 17일 발행</p>
  //     </div>
  //   );
  // }
}
export default App;
