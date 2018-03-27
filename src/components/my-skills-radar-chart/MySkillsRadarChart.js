import React from "react";
import "./MySkillsRadarChart.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";
import { newSkillsData } from "../../utils/skillsData";
import { oldSkillsData } from "../../utils/skillsData";
import { Grid, Cell } from "react-mdl";

const MySkillsRadarChart = () => (
  <div>
    <div style={{ width: "100%", margin: "auto" }}>
      <Grid className="skills-grid">
        <Cell col={6}>
          <h3>My Old Skills</h3>
          <RadarChart
            cx={300}
            cy={250}
            outerRadius={150}
            width={600}
            height={430}
            data={oldSkillsData}
          >
            <Radar
              name="Old Skills"
              dataKey="A"
              stroke="#ffc802"
              fill="#ffc802"
              fillOpacity={0.8}
            />
            <PolarGrid gridType="polygon" />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 10]} />
          </RadarChart>
        </Cell>
        <Cell col={6}>
          <h3>My New Skills</h3>
          <RadarChart
            cx={300}
            cy={250}
            outerRadius={150}
            width={600}
            height={500}
            data={newSkillsData}
          >
            <Radar
              name="New Skills"
              dataKey="B"
              stroke="#8d02ff"
              fill="#8d02ff"
              fillOpacity={0.8}
            />
            <PolarGrid gridType="polygon" />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 10]} />
          </RadarChart>
        </Cell>
      </Grid>
    </div>
  </div>
);

export default MySkillsRadarChart;
