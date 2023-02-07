import '../App.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { BrowserRouter as Router, Route, Routes, Link, useLocation  } from "react-router-dom";
import $ from 'jquery';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import { HomeHeader } from '../HomeView/HomeHeader';
import { HomeBody } from '../HomeView/HomeBody';
import { StepHeader } from '../StepView/StepHeader';
import { StepOne } from '../StepView/StepOne';
import { StepFooter } from '../StepView/StepFooter';
import { StepThree } from '../StepView/StepThree';
import { StepZero } from '../StepView/StepZero';
import { SetLocationHeader } from '../SetLocationView/SetLocationHeader';
import { SetLocationBody } from '../SetLocationView/SetLocationBody';
import { DateDic } from '../Functions/DateDic';
import axios from 'axios';

export function Home() {
  const navigate = useNavigate();
  const [page, setPage]= useState("Home");
  const [type, setType] = useState(null);
  const [location, setLocation] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [mainLoc, setMainLoc] = useState(null);
  const [subLoc, setSubLoc] = useState(null);
  const [person, setPerson] = useState(null);
  const [calendar, setCalendar] = useState(null);
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [budget, setBudget] = useState({"min": "", "max": ""});
  const [value, onChange] = useState(new Date());
  const [dateDic, setDateDic] = useState("날짜를 선택해주세요.");
  const [checkDisabled, setCheckDisabled] = useState(null);
  const [checkPet, setCheckPet] = useState(null);
  const [checkOrdered, setCheckOrdered] = useState(null);
  const [checkPromotion, setCheckPromotion] = useState(null);

  const homeType = {"hotel": 2, "pension": 3, "motel": 1};
  const hotelLocation = {"서울": ["강남/역삼/삼성/신사/청담", "서초/교대", "잠실/송파/왕십리/강동", "을지로/시청/명동", "종로/인사동/동대문/강북", "서울역/이태원/용산", "마포/홍대/신촌/서대문", "영등포/여의도/김포공항", "구로/금천/관악/동작"], "부산": ["해운대 (센텀,송정,달맞이)", "광안리", "부산역/남포/자갈치", "서면/동래/연제/남구", "기장/김해공항/기타(그외 지역)", "영도/송도해수욕장"], "제주": ["제주시/제주국제공항", "애월/협재/한림", "조천/함덕/김녕", "서귀포시", "중문", "성산/표선"], "강원": ["강릉/동해/삼척", "속초/고성", "양양/홍천/인제/철원", "평창/정선/횡성", "춘천/원주/영월/태백"], "경기": ["수원/성남/판교", "가평/양평/포천", "용인/평택/여주/이천", "화성/동탄/안산/부천/안양", "고양/의정부/파주/김포", "시흥/군포/광명", "남양주시/구리/하남"], "인천": ["송도/남동구/옹진군", "인천국제공항(중구)", "부평/계양/서구/미추홀구/강화"], "경상": ["경주", "거제/고성", "포항/청송/영덕/울진", "통영/창녕", "대구/구미/문경/안동", "창원/양산/김해/울산", "사천/남해/진주/하동"], "전라": ["여수", "전주", "광주", "순천/광양", "군산/익산/부안/진안/무주", "화순/남원/구례", "목포/나주/완도/해남/영암"], "충청": ["대전", "천안/아산/예산/당진", "보령(대천)/태안(안면도)/서산/부여", "충주/제천/단양", "청주/세종"]};
  const hotelLocationID = {"강남/역삼/삼성/신사/청담": 2012, "서초/교대": 2019, "잠실/송파/왕십리/강동": 2016, "을지로/시청/명동": 2014, "종로/인사동/동대문/강북": 2015, "서울역/이태원/용산": 2020, "마포/홍대/신촌/서대문": 2018, "영등포/여의도/김포공항": 2017, "구로/금천/관악/동작": 2021, "해운대 (센텀,송정,달맞이)": 2041, "광안리": 2043, "부산역/남포/자갈치": 2042, "서면/동래/연제/남구": 2044, "기장/김해공항/기타(그외 지역)": 2045, "영도/송도해수욕장": 2046, "제주시/제주국제공항": 2051, "애월/협재/한림": 2053, "조천/함덕/김녕": 2054, "서귀포시": 2052, "중문": 2055, "성산/표선": 2056, "강릉/동해/삼척": 2081, "속초/고성": 2084, "양양/홍천/인제/철원": 2082, "평창/정선/횡성": 2083, "춘천/원주/영월/태백": 2085, "수원/성남/판교": 2061, "가평/양평/포천": 2062, "용인/평택/여주/이천": 2064, "화성/동탄/안산/부천/안양": 2065, "고양/의정부/파주/김포": 2063, "시흥/군포/광명": 2066, "남양주시/구리/하남": 2067, "송도/남동구/옹진군": 2071, "인천국제공항(중구)": 2072, "부평/계양/서구/미추홀구/강화": 2070, "경주": 2101, "거제/고성": 2103, "포항/청송/영덕/울진": 2107, "통영/창녕": 2108, "대구/구미/문경/안동": 2102, "창원/양산/김해/울산": 2105, "사천/남해/진주/하동": 2106, "여수": 2112, "전주": 2110, "광주": 2111, "순천/광양": 2113, "군산/익산/부안/진안/무주": 2114, "화순/남원/구례": 2116, "목포/나주/완도/해남/영암": 2115, "대전": 2093, "천안/아산/예산/당진": 2095, "보령(대천)/태안(안면도)/서산/부여": 2096, "충주/제천/단양": 2094, "청주/세종": 2097}

  const today = new Date();
  const maxDate = new Date(new Date().setMonth(new Date().getMonth() + 2));	

  useEffect(()=>{
    $(document).on("click", "#hotelSelector", ()=>{
      var clickedType = homeType["hotel"];
      setType(clickedType);
      setPage("Location");
    });

    /*$(document).on("click", "#pensionSelector", ()=>{
      var clickedType = homeType["pension"];
      setType(clickedType);
      setPage("Location");
    });

    $(document).on("click", "#motelSelector", ()=>{
      var clickedType = homeType["motel"];
      setType(clickedType);
      setPage("Location");
    });*/

    $(document).on("click", "#hotelLocation", ()=>{
      setLocationData(hotelLocation);
      setPage("SetLocation");
    });

    $(document).on("click", "#locationPass", ()=>{
      var locText = $("#hotelLocation").text();
      if(locText == "지역 선택하기"){
        alert("지역을 선택해주세요.")
      } else{
        setPage("Person");
      }
    });

    $(document).on("click", "#isDisabledTrue", ()=>{
      setCheckDisabled(true);
    })

    $(document).on("click", "#isDisabledFalse", ()=>{
      setCheckDisabled(false);
    })

    $(document).on("click", "#hasPetTrue", ()=>{
      setCheckPet(true);
    })

    $(document).on("click", "#hasPetFalse", ()=>{
      setCheckPet(false);
    })

    $(document).on("click", "#personPass", ()=>{
      var adultNum = parseInt($("#adultNum").text());
      var childNum = parseInt($("#childNum").text());
      var personNum = adultNum + childNum;
      if(personNum > 0){
        setPerson(personNum);
        setAdult(adultNum);
        setChild(childNum);
        setPage("Calendar");
      } else {
        alert("인원 수는 1명 이상부터 가능합니다.");
      }
    });

    $(document).on("click", ".searchCalendar", ()=>{
      $(".calendarDisplay").css('display', 'flex');
    });

    $(document).on("click", ".clickCalendar", () => {
      $(".calendarDisplay").css('display', 'none');
    });

    $(document).on("click", "#canOrderedTrue", ()=>{
      setCheckOrdered(true);
    })

    $(document).on("click", "#canOrderedFalse", ()=>{
      setCheckOrdered(false);
    })

    $(document).on("click", "#canPromotionTrue", ()=>{
      setCheckPromotion(true);
    })

    $(document).on("click", "#canPromotionFalse", ()=>{
      setCheckPromotion(false);
    })

    $(document).on("click", "#pageBackOne", ()=>{
      window.location.reload();
    });

    $(document).on("click", "#setLocationPageBack", ()=>{
      setMainLoc(null);
      setPage("Location");
    });

    $(document).on("click", "#pageBackTwo", ()=>{
      var adultNum = parseInt($("#adultNum").text());
      var childNum = parseInt($("#childNum").text());
      setAdult(adultNum);
      setChild(childNum);
      setPage("Location");
    });

    $(document).on("click", "#pageBackThree", ()=>{
      setPage("Person");
    });

    $(document).on("click", "#pageBackFour", ()=>{
      var minBudget = parseInt($("#minBudget").val());
      var maxBudget = parseInt($("#maxBudget").val());
      if(minBudget == NaN){
        minBudget = "";
      }
      if(maxBudget == NaN){
        maxBudget = "";
      }
      const budgetDic = {"min": minBudget, "max": maxBudget};
      setBudget(budgetDic);
      setPage("Calendar");
    });
  }, []);

  $(document).on("click", ".mainLocation", function(event) {
    var loc = this.getElementsByClassName("mainLocationName")[0].innerText;
    $(".mainLocation").css('background', 'rgb(217, 217, 217, 0.5)');
    $(this).css('background', 'white');
    setMainLoc(loc);
  });

  $(document).on("click", ".subLocation", function(event) {
    var subLoc = this.getElementsByClassName("subLocationName")[0].innerText;
    var locID = hotelLocationID[subLoc];
    setSubLoc(subLoc);
    setLocation(locID);
    setPage("Location");
    setMainLoc(null);
  });

  if(page == "Home"){
    return(
      <div>
        <HomeHeader></HomeHeader>
        <HomeBody></HomeBody>
      </div>
    );
  } else if(page == "Location"){
      if(type == 2){
        return(
          <div>
            <HomeHeader></HomeHeader>
            <StepHeader step={"00"} description={"지역을 선택해주세요."}></StepHeader>
            <StepZero searchType="hotelLocation" subText={subLoc}></StepZero>
            <StepFooter beforeId={"pageBackOne"} afterId={"locationPass"}></StepFooter>
          </div>
        )
      } else{
        return(
          <div>
            <HomeHeader></HomeHeader>
            <StepHeader step={"00"} description={"지역을 선택해주세요."}></StepHeader>
            <StepZero searchType="hotelLocation" subText={subLoc}></StepZero>
            <StepFooter beforeId={"pageBackOne"} afterId={"locationPass"}></StepFooter>
          </div>
        )
      };
  } else if(page == "SetLocation"){
    return(
      <div>
        <SetLocationHeader></SetLocationHeader>
        <SetLocationBody locData={locationData} mainLoc={mainLoc}></SetLocationBody>
      </div>
    );
  } else if(page == "Person"){
    return (
      <div>
        <HomeHeader></HomeHeader>
        <StepHeader step={"01"} description={"여행 인원을 알려주세요."}></StepHeader>
        <StepOne adult={adult} child={child} checkDisabled={checkDisabled} checkPet={checkPet}></StepOne>
        <StepFooter beforeId={"pageBackTwo"} afterId={"personPass"}></StepFooter>
      </div>
    );
  } else if(page == "Calendar"){
    return(
    <div>
      <HomeHeader></HomeHeader>
      <StepHeader step={"02"} description={"여행 기간을 알려주세요."}></StepHeader>
      <div className="stepBody" id="stepTwo">
        <div className="searchCalendar">
          {dateDic}
        </div>
        <div className="calendarDisplay">
          <Calendar onChange={onChange} value={value} selectRange={true} minDate={today} maxDate={maxDate}/>
          <input className="clickCalendar" type="button" value="선택 완료" onClick={()=>{
            if(value[0] == undefined || value[1] == undefined ){
              //Do Something...
            } else{
              var date = DateDic(value[0], value[1]);
              var startDate = date.start;
              var endDate = date.end;
              if(startDate == endDate){
                const start = new Date(value[0]);
                const end = new Date(value[1]);
                const tomorrow = new Date(end.setDate(end.getDate() + 1));
                onChange([start, tomorrow]);
                const dateDic = DateDic(start, tomorrow);
                const startDay = dateDic.start;
                const endDay = dateDic.end;
                const startDayText = startDay.split("-").slice(-2).join("/");
                const endDayText = endDay.split("-").slice(-2).join("/");
                setDateDic(startDayText + "~" + endDayText + ", 1박");
              } else{
                var diffSec = value[1] - value[0];
                var diffDate = diffSec / (1000 * 60 * 60 * 24);
                if(diffDate > 8){
                  alert("최대 7박 선택 가능합니다.");
                  const start = new Date(value[0]);
                  const end = new Date(value[0]);
                  const nextWeek = new Date(end.setDate(end.getDate() + 7));
                  onChange([start, nextWeek]);
                  const dateDic = DateDic(start, nextWeek);
                  const startDay = dateDic.start;
                  const endDay = dateDic.end;
                  const startDayText = startDay.split("-").slice(-2).join("/");
                  const endDayText = endDay.split("-").slice(-2).join("/");
                  setDateDic(startDayText + "~" + endDayText + ", 7박");
                } else{
                  const start = new Date(value[0]);
                  const end = new Date(value[1]);
                  onChange([start, end]);
                  const dateDic = DateDic(start, end);
                  const startDay = dateDic.start;
                  const endDay = dateDic.end;
                  const startDayText = startDay.split("-").slice(-2).join("/");
                  const endDayText = endDay.split("-").slice(-2).join("/");
                  setDateDic(startDayText + "~" + endDayText + ", " + Math.floor(diffDate) + "박");
                }
              }
            }
          }}/>
        </div>
      </div>
      <div className="stepFooter">
        <div className="stepFlex" id="pageBackThree">
          <div className="stepArrowImage">
            <img src="img/Arrow 1-1.svg" alt="arrow"/>
          </div>
          <div className="stepText">
            이전
          </div>
        </div>
          <div className="stepFlex" id="calendarPass" onClick={()=>{
            if(value[0] == undefined || value[1] == undefined ){
              //Do Something...
            } else{
              var date = DateDic(value[0], value[1]);
              setCalendar(date);
              setPage("Budget");
            }
          }}>
            <div className="stepArrowImage">
              <img src="img/Arrow 1.svg" alt="arrow"/>
            </div>
            <div className="stepText">
              다음
            </div>
          </div>
        </div>
    </div>
    )
  } else if(page == "Budget"){
    return(
    <div className="budgetView">
      <HomeHeader></HomeHeader>
      <StepHeader step={"03"} description={"숙박 예산을 알려주세요."}></StepHeader>
      <StepThree budget={budget} checkOrdered={checkOrdered} checkPromotion={checkPromotion}></StepThree>
      <div className='activityIndicator'><img src="img/loading-gif.gif" /></div>
      <form action="/trip" method="POST" target='blankifr'>
        <div className="stepFooter">
            <div className="stepFlex" id="pageBackFour">
                <div className="stepArrowImage">
                    <img src="img/Arrow 1-1.svg" alt="arrow"/>
                </div>
                <div className="stepText">
                    이전
                </div>
            </div>
            <div className="stepFlex" onClick={()=>{
              $(".activityIndicator").css("display", "flex");
              
              var minBudget = parseInt($("#minBudget").val());
              var maxBudget = parseInt($("#maxBudget").val());
              const budgetDic = {"min": minBudget, "max": maxBudget};
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
                axios.post('http://localhost:3000/trip', {
                  type: type,
                  location: location,
                  person: person,
                  calendar: calendar,
                  isDisabled: checkDisabled,
                  hasPet: checkPet,
                  canOrdered: checkOrdered,
                  canPromotion: checkPromotion,
                  filteredFacility: null
                }).then((response)=>{
                  const data = response.data;
                  navigate('/recommend', {state: {
                    data: data,
                    region: subLoc,
                    budget: budgetDic,
                    type: type,
                    location: location,
                    person: person,
                    calendar: calendar,
                    isDisabled: checkDisabled,
                    hasPet: checkPet,
                    canOrdered: checkOrdered,
                    canPromotion: checkPromotion
                  }});
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
  }
}