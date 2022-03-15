import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { BsFacebook } from "react-icons/bs";

function PieChartComponent() {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <div>
        <h3 className="text-gray-500 text-2xl font-semibold dark:text-zinc-50">
          Trafic
        </h3>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart width={100} height={200}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-around flex-wrap">
        <div className=" shadow-md w-full pl-5 pr-5 mt-3 md:w-max dark:bg-slate-900">
          <h2 className="text-xl text-gray-900 font-semibold dark:text-zinc-200">
            40%
          </h2>
          <div className="flex items-center">
            <div className="w-3 h-3 mr-1 bg-[#00C49F] rounded-full"></div>
            <h4 className="text-[12px] text-gray-500 dark:text-zinc-200">
              Youtube
            </h4>
          </div>
        </div>
        <div className=" shadow-md w-full pl-5 pr-5 md:w-max mt-3 dark:bg-slate-900">
          <h2 className="text-xl text-gray-900 font-semibold dark:text-zinc-200">
            10%
          </h2>
          <div className="flex items-center">
            <div className="w-3 h-3 mr-1 bg-[#FF8042] rounded-full"></div>
            <h4 className="text-[12px]  text-gray-500 dark:text-zinc-200">
              Twiter
            </h4>
          </div>
        </div>
        <div className=" shadow-md pl-5 w-full md:w-max pr-5 mt-3 dark:bg-slate-900">
          <h2 className="text-xl text-gray-900 font-semibold dark:text-zinc-200">
            30%
          </h2>
          <div className="flex items-center">
            <div className="w-3 h-3 mr-1 bg-blue-600 rounded-full"></div>
            <h4 className="text-[12px]  text-gray-500 dark:text-zinc-200">
              Facebook
            </h4>
          </div>
        </div>
        <div className="shadow-md pl-5 pr-5 w-full  md:w-max md:ml-2 mt-3 dark:bg-slate-900">
          <h2 className="text-xl text-gray-900 font-semibold dark:text-zinc-200">
            20%
          </h2>
          <div className="flex items-center">
            <div className="w-3 h-3 mr-1 bg-[#FFBB28] rounded-full"></div>
            <h4 className="text-[12px]  text-gray-500 dark:text-zinc-200">
              Dirrect search
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
  k;
}

export default PieChartComponent;
