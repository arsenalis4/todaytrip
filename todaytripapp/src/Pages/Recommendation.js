import '../App.css';
import $ from 'jquery';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate  } from "react-router-dom";
import { HomeHeader } from '../HomeView/HomeHeader';
import { RecommendationBody } from '../RecommendationView/RecommendationBody';
import { RecommendationFooter } from '../RecommendationView/RecommendationFooter';
import { FilterHeader } from '../FilterView/FilterHeader';
import { FilterBody } from '../FilterView/FilterBody';
import axios from 'axios';

export function Recommendation(){
  const [page, setPage] = useState(null);
  const [filteredType, setFilteredType] = useState(null);

  const navigate = useNavigate();
  const loc = useLocation();
  const state = loc.state;

  useEffect(()=>{
    $(document).off('click', "#저가순").on("click", "#저가순", ()=>{
      var isClicked = $("#저가순").css('background-color') == 'rgba(167, 167, 199, 0.5)';
      if(!isClicked){
        $("#저가순").css('background', 'rgba(167, 167, 199, 0.5)');
        $("#고가순").css('background', 'white');
        $("#별점순").css('background', 'white');
        setFilteredType("lowprice");
      } else{
        $("#저가순").css('background', 'white');
        setFilteredType(null);
      }
    })

    $(document).off('click', "#고가순").on("click", "#고가순", ()=>{
      var isClicked = $("#고가순").css('background-color') == 'rgba(167, 167, 199, 0.5)';
      if(!isClicked){
        $("#저가순").css('background', 'white');
        $("#고가순").css('background', 'rgba(167, 167, 199, 0.5)');
        $("#별점순").css('background', 'white');
        setFilteredType("highprice");
      } else{
        $("#고가순").css('background', 'white');
        setFilteredType(null);
      }
    })

    $(document).off('click', "#별점순").on("click", "#별점순", ()=>{
      var isClicked = $("#별점순").css('background-color') == 'rgba(167, 167, 199, 0.5)';
      if(!isClicked){
        $("#저가순").css('background', 'white');
        $("#고가순").css('background', 'white');
        $("#별점순").css('background', 'rgba(167, 167, 199, 0.5)');
        setFilteredType("ranking");
      } else{
        $("#별점순").css('background', 'white');
        setFilteredType(null);
      }
    })

    $(document).on("click", ".filterIcon", ()=>{
      setPage("FilterPage");
    })

    $(document).on("click", ".filterOutIcon", ()=>{
      setPage(null);
    })
  }, [])

  if(page == null){
    return(
      <div>
        <HomeHeader></HomeHeader>
        <RecommendationBody region={state.region} data={state.data} filteredType={filteredType} budget={state.budget}></RecommendationBody>
        <RecommendationFooter></RecommendationFooter>
      </div>
    );
  } else if(page == "FilterPage"){
    return(
      <div className="filterPage">
        <HomeHeader></HomeHeader>
        <FilterHeader></FilterHeader>
        <FilterBody></FilterBody>
        <div className='filterActivityIndicator'><img src="img/loading-gif.gif" /></div>
        <div className="recommendationFooter">
            <div className="goHomeButton" onClick={()=>{
                $(".filterActivityIndicator").css("display", "flex");

                const filteredDic = {};
                const amenityLis = [];
                const roomLis = [];

                $('input:checkbox[name="amenity"]').each(function() {
                  if(this.checked){
                   amenityLis.push(this.value); 
                  }
                });
                $('input:checkbox[name="room"]').each(function() {
                  if(this.checked){
                    roomLis.push(this.value); 
                  }
                });

                filteredDic["amenity"] = amenityLis;
                filteredDic["room"] = roomLis;

                axios.post('http://localhost:3000/trip', {
                    type: state.type,
                    location: state.location,
                    person: state.person,
                    calendar: state.calendar,
                    isDisabled: state.isDisabled,
                    hasPet: state.hasPet,
                    canOrdered: state.canOrdered,
                    canPromotion: state.canPromotion,
                    filteredFacility: filteredDic
                  }).then((response)=>{
                    const data = response.data;
                    navigate("/recommend", {state: {
                      data: data,
                      region: state.region,
                      budget: state.budget,
                      type: state.type,
                      location: state.location,
                      person: state.person,
                      calendar: state.calendar,
                      isDisabled: state.isDisabled,
                      hasPet: state.hasPet,
                      canOrdered: state.canOrdered,
                      canPromotion: state.canPromotion
                    }})
                    setFilteredType(null);
                    setPage(null);
                  });
            }}>
                적용하기
            </div>
        </div>
      </div>
    )
  }
}