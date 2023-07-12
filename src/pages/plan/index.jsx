import LayoutWebsite from "../../shared/layout/LayoutWebsite";
import { Breadcrumb, Row, Col, Tabs } from "antd";
import DetailPlan from "../../shared/components/DetailPlan";
import BannerPage from "../../shared/components/BannerPage";
const planStep = ["Morning", "Lunch", "Dinner"]
const recipes = ["https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg", "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg", "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg", "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg", "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg", "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"]
const fakeAPI = [
    {
        date: "monday",
        period: [
            {
                name: "morning",
                recipes: ["https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg", "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"]
            },
            {
                name: "lunch",
                recipes: ["https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg", "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg", "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg", "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"]
            },
            {
                name: "dinner",
                recipes: ["https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg", "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg", "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"]
            }
        ]
    },
    {
        date: "tuesday",
        period: [
            {
                name: "morning",
                recipes: []
            },
            {
                name: "lunch",
                recipes: ["https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg", "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"]
            },
            {
                name: "dinner",
                recipes: ["https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg", "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg", "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"]
            }
        ]
    }
]
const items = [
    {
        key: '1',
        label: `Monday`,
        children: fakeAPI.map((day, index) => {
            if (day.date !== "monday") return null;
          
            return day.period.map((plan) => (
              <DetailPlan recipes={plan.recipes} key={index} title={plan.name} />
            ));
          })          
    },
    {
        key: '2',
        label: `Tuesday`,
        children: planStep.map((plan, index) => {
            return (
                <DetailPlan recipes={recipes} key={index} title={plan} />
            )
        })
    },
    {
        key: '3',
        label: `Wednesday`,
        children: planStep.map((plan, index) => {
            return (
                <DetailPlan recipes={recipes} key={index} title={plan} />
            )
        })
    },
    {
        key: '4',
        label: `Thursday`,
        children: planStep.map((plan, index) => {
            return (
                <DetailPlan recipes={recipes} key={index} title={plan} />
            )
        })
    },
    {
        key: '5',
        label: `Friday`,
        children: planStep.map((plan, index) => {
            return (
                <DetailPlan recipes={recipes} key={index} title={plan} />
            )
        })
    },
    {
        key: '6',
        label: `Saturday`,
        children: planStep.map((plan, index) => {
            return (
                <DetailPlan recipes={recipes} key={index} title={plan} />
            )
        })
    },
    {
        key: '7',
        label: `Sunday`,
        children: planStep.map((plan, index) => {
            return (
                <DetailPlan recipes={recipes} key={index} title={plan} />
            )
        })
    },
];
const Plan = () => {
    const onChange = (key) => {
        console.log(key);
    };
    return (<LayoutWebsite>
       <BannerPage title="PLAN" />
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </LayoutWebsite>);
}

export default Plan;