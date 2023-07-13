import LayoutWebsite from "../../shared/layout/LayoutWebsite";
import { Breadcrumb, Row, Col, Tabs } from "antd";
import DetailPlan from "../../shared/components/DetailPlan";
import BannerPage from "../../shared/components/BannerPage";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { planService } from "../../shared/services/plan.service";
import { useQuery } from "react-query";
const planStep = ["Morning", "Lunch", "Dinner"]

const recipes = [
    {
        starttime: "00:00:00",
        endtime: "00:00:00",
        dayinschedule: "Monday",
        ref_post: "1",
        title: "fdsfsdfsdf"
    },
    {
        starttime: "00:00:00",
        endtime: "00:00:00",
        dayinschedule: "Tuesday",
        ref_post: "1",
        title: "fdsfsdfsdf"
    }, {
        starttime: "00:00:00",
        endtime: "00:00:00",
        dayinschedule: "Wednesday",
        ref_post: "1",
        title: "fdsfsdfsdf"
    }
]

const Plan = () => {
    const onChange = (key) => {
        console.log(key);
    };
    const { user } = useSelector(state => state.appSlice)
    const { data } = useQuery(["Plan"], () => planService.getPlanById(user.id), {
        enabled: !user
    })
    const items = [
        {
            key: '1',
            label: `Monday`,
            children: recipes.filter(item => item.dayinschedule === "Monday" && item).map((item, index) => {
                if (!item) return
                return (
                    <DetailPlan recipes={item} key={index} title={item.dayinschedule} />
                );
            })
        },
        {
            key: '2',
            label: `Tuesday`,
            children: recipes.filter(item => item.dayinschedule === "Tuesday" && item).map((item, index) => {
                if (!item) return
                return (
                    <DetailPlan recipes={item} key={index} title={item.dayinschedule} />
                );
            })
        },
        {
            key: '3',
            label: `Wednesday`,
            children: recipes.filter(item => item.dayinschedule === "Wednesday" && item).map((item, index) => {
                if (!item) return
                return (
                    <DetailPlan recipes={item} key={index} title={item.dayinschedule} />
                );
            })
        },
        {
            key: '4',
            label: `Thursday`,
            children: recipes.filter(item => item.dayinschedule === "Thursday" && item).map((item, index) => {
                if (!item) return
                return (
                    <DetailPlan recipes={item} key={index} title={item.dayinschedule} />
                );
            })
        },
        {
            key: '5',
            label: `Friday`,
            children: recipes.filter(item => item.dayinschedule === "Friday" && item).map((item, index) => {
                if (!item) return
                return (
                    <DetailPlan recipes={item} key={index} title={item.dayinschedule} />
                );
            })
        },
        {
            key: '6',
            label: `Saturday`,
            children: recipes.filter(item => item.dayinschedule === "Saturday" && item).map((item, index) => {
                if (!item) return
                return (
                    <DetailPlan recipes={item} key={index} title={item.dayinschedule} />
                );
            })
        },
        {
            key: '7',
            label: `Sunday`,
            children: recipes.filter(item => item.dayinschedule === "Sunday" && item).map((item, index) => {
                if (!item) return
                return (
                    <DetailPlan recipes={item} key={index} title={item.dayinschedule} />
                );
            })
        },
    ];
    return (<LayoutWebsite>
        <BannerPage title="PLAN" />
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </LayoutWebsite>);
}

export default Plan;