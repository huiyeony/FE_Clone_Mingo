import {
  ChartBar,
  Code2,
  DraftingCompass,
  Footprints,
  Lightbulb,
  List,
  Rocket,
  Target,
} from "lucide-react";

export const TOPIC_CATEGORY = [
  { id: 1, label: "전체", icon: <List /> },
  { id: 2, label: "인문학", icon: <Lightbulb /> },
  { id: 3, label: "스타트업", icon: <Rocket /> },
  { id: 4, label: "IT프로그래밍", icon: <Code2 /> },
  { id: 5, label: "서비스전략기획", icon: <Target /> },
  { id: 6, label: "마케팅", icon: <ChartBar /> },
  { id: 7, label: "디자인일러스트", icon: <DraftingCompass /> },
  { id: 8, label: "자기계발", icon: <Footprints /> },
];
