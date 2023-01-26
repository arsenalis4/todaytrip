import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import axios from 'axios';
import { HomeHeader } from './HomeView/HomeHeader';
import { HomeBody } from './HomeView/HomeBody';
import { StepHeader } from './StepView/StepHeader';
import { StepOne } from './StepView/StepOne';
import { StepFooter } from './StepView/StepFooter';
import { StepThree } from './StepView/StepThree';

function App() {
  const [page, setPage]= useState("Home");
  const [data, setData] = useState(null);
  const [type, setType] = useState(null);
  const [location, setLocation] = useState(null);
  const [person, setPerson] = useState(null);
  const [calendar, setCalendar] = useState(null);
  const [budget, setBudget] = useState(null);

  const homeType = {"hotel": 2, "pension": 3, "motel": 1};
  const locationID = {"강남/역삼/삼성/신사/청담": 2012, "서초/교대": 2019, "잠실/송파/왕십리/강동": 2016, "을지로/시청/명동": 2014, "종로/인사동/동대문/강북": 2015, "서울역/이태원/용산": 2020, "마포/홍대/신촌/서대문": 2018, "영등포/여의도/김포공항": 2017, "구로/금천/관악/동작": 2021}

  useEffect(()=>{
    $(document).on("click", "#hotelSelector", ()=>{
      var type = homeType["hotel"];
      setType(type);
      setPage("Location");
    });

    $(document).on("click", "#pensionSelector", ()=>{
      var type = homeType["pension"];
      setType(type);
      setPage("Location");
    });

    $(document).on("click", "#motelSelector", ()=>{
      var type = homeType["motel"];
      setType(type);
      setPage("Location");
    });

    $(document).on("click", "#locationPass", ()=>{
      var location = locationID[$(".location").val()];
      setLocation(location);
      setPage("Person");
      $(".location").val("");
    });

    $(document).on("click", "#adultUp", ()=>{
      var adultNum = parseInt($("#adultNum").text());
      var childNum = parseInt($("#childNum").text());
      var personNum = adultNum + childNum;
      if(personNum < 4){
        adultNum += 1;
        $("#adultNum").text(adultNum);
      } else{
        alert("인원 수는 4명까지 가능합니다.")
      }
    });

    $(document).on("click", "#childUp", ()=>{
      var adultNum = parseInt($("#adultNum").text());
      var childNum = parseInt($("#childNum").text());
      var personNum = adultNum + childNum;
      if(personNum < 4){
        childNum += 1;
        $("#childNum").text(childNum);
      } else{
        alert("인원 수는 4명까지 가능합니다.")
      }
    });

    $(document).on("click", "#adultDown", ()=>{
      var adultNum = parseInt($("#adultNum").text());
      var childNum = parseInt($("#childNum").text());
      var personNum = adultNum + childNum;
      if(personNum > 0 && adultNum > 0){
        adultNum -= 1;
        $("#adultNum").text(adultNum);
      } else{
        alert("인원 수는 1명 이상부터 가능합니다.");
      }
    });

    $(document).on("click", "#childDown", ()=>{
      var adultNum = parseInt($("#adultNum").text());
      var childNum = parseInt($("#childNum").text());
      var personNum = adultNum + childNum;
      if(personNum > 0 && childNum > 0){
        childNum -= 1;
        $("#childNum").text(childNum);
      } else{
        alert("인원 수는 1명 이상부터 가능합니다.");
      }
    });

    $(document).on("click", "#personPass", ()=>{
      var adultNum = parseInt($("#adultNum").text());
      var childNum = parseInt($("#childNum").text());
      var personNum = adultNum + childNum;
      if(personNum > 0){
        setPerson(personNum);
        setPage("Calendar");
      } else{
        alert("인원 수는 1명 이상부터 가능합니다.");
      }
    });

    $(document).on("click", "#calendarPass", ()=>{
      var startDate = $(".startDate").val();
      var endDate = $(".endDate").val();
      var date = {"start": startDate, "end": endDate};
      setCalendar(date);
      setPage("Budget");
      $(".startDate").val("");
      $(".endDate").val("");
    });
  }, []);

  if(page == "Home"){
    return(
      <div>
        <HomeHeader></HomeHeader>
        <HomeBody></HomeBody>
      </div>
    );
  }
  else if(page == "Location"){
    return(
      <div>
        <HomeHeader></HomeHeader>
        <StepHeader step={"00"} description={"지역을 선택해주세요."}></StepHeader>
        <StepFooter afterId={"locationPass"}></StepFooter>
        <input type="text" className="location" name="location" placeholder="location" />
        <div>1</div>
      </div>
    )
  } else if(page == "Person"){
    return (
      <div>
        <HomeHeader></HomeHeader>
        <StepHeader step={"01"} description={"여행 인원을 알려주세요."}></StepHeader>
        <StepOne></StepOne>
        <StepFooter afterId={"personPass"}></StepFooter>
      </div>
    );
  } else if(page == "Calendar"){
    return(
    <div>
      <HomeHeader></HomeHeader>
      <StepHeader step={"02"} description={"여행 기간을 알려주세요."}></StepHeader>
      <input type="text" className="startDate" name="startDate" placeholder="startDate" />
      <input type="text" className="endDate" name="endDate" placeholder="endDate" />
      <div>3</div>
      <div id="calendarPass">다음</div>
    </div>
    )
  } else if(page == "Budget"){
    return(
    <div className="budgetView">
      <HomeHeader></HomeHeader>
      <StepHeader step={"03"} description={"숙박 예산을 알려주세요."}></StepHeader>
      <StepThree></StepThree>
      <form action="/trip" method="POST" target='blankifr'>
        <div className="stepFooter">
            <div className="stepFlex">
                <div className="stepArrowImage">
                    <img src="img/Arrow 1-1.svg" alt="arrow"/>
                </div>
                <div className="stepText">
                    이전
                </div>
            </div>
            <div className="stepFlex" onClick={()=>{
              var minBudget = parseInt($("#minBudget").val());
              var maxBudget = parseInt($("#maxBudget").val());
              if(minBudget == null || maxBudget == null){
                alert("예산을 입력해주세요.");
                return;
              } else if(minBudget < 0 || maxBudget < 0){
                alert("예산은 0원 이상으로 가능합니다.");
                return;
              } else if (minBudget > maxBudget){
                alert("최대 예산은 최소 예산보다 커야합니다.");
                return;
              } else{
                var budgetDic = {"min": minBudget, "max": maxBudget};
                setBudget(budgetDic);
                axios.post('http://localhost:3000/trip', {
                  type: type,
                  location: location,
                  person: person,
                  calendar: calendar,
                  budget: budget
                }).then((response)=>{
                  var data = response.data;
                  setData(data);
                  setPage("RecommendationView");
                  $("#minBudget").val("");
                  $("#maxBudget").val("");
                });
              }
            }}>
                <div className="stepArrowImage">
                    <img src="img/Arrow 1.svg" alt="arrow"/>
                </div>
                <div className="stepText">
                    완료
                </div>
            </div>
        </div>
      </form>
    </div>
    )
  } else if(page == "RecommendationView"){
    console.log(data);
    return(
      <div>
        Success!
      </div>
    )
  }
}

export default App;
