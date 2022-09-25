import React, { useState } from "react";
import "./LearningCatalogPage.scss";
import { LearningDisplayList, SearchBar } from "@components/index";

export const LearningCatalogPage = () => {
  const [searchValue, setSearchValue] = useState<string | null>(null);

  const learningList = [
    {
      id: 1,
      title: "Test Learning 1",
      type: "Distanciel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eaque voluptate dicta possimus nemo consectetur ipsa, provident molestiae vel commodi adipisci animi veritatis enim laboriosam itaque similique iure ex. Exercitationem",
      instructor: "Brice",
      duration: 45,
      capacityLearner: 100,
      startRegistration: new Date("22-10-2022"),
      endRegistration: new Date("01-01-2025"),
    },
    {
      id: 2,
      title: "Test Learning 2",
      type: "Distanciel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eaque voluptate dicta possimus nemo consectetur ipsa, provident molestiae vel commodi adipisci animi veritatis enim laboriosam itaque similique iure ex. Exercitationem",
      instructor: "Brice",
      duration: 5,
      capacityLearner: 10,
      startRegistration: new Date("22-10-2022"),
      endRegistration: new Date("01-01-2025"),
    },
    {
      id: 3,
      title: "Test Learning 3",
      type: "Distanciel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eaque voluptate dicta possimus nemo consectetur ipsa, provident molestiae vel commodi adipisci animi veritatis enim laboriosam itaque similique iure ex. Exercitationem",
      instructor: "Brice",
      duration: 45,
      capacityLearner: 100,
      startRegistration: new Date("22-10-2022"),
      endRegistration: new Date("01-01-2025"),
    },
    {
      id: 4,
      title: "Test Learning 1",
      type: "Distanciel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eaque voluptate dicta possimus nemo consectetur ipsa, provident molestiae vel commodi adipisci animi veritatis enim laboriosam itaque similique iure ex. Exercitationem",
      instructor: "Brice",
      duration: 45,
      capacityLearner: 100,
      startRegistration: new Date("22-10-2022"),
      endRegistration: new Date("01-01-2025"),
    },
  ];

  const learningListSearched = learningList.filter(
    (learning) =>
      !searchValue ||
      learning.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <div className="catalog">
      <SearchBar onChange={setSearchValue} />
      <LearningDisplayList learningList={learningListSearched} />
    </div>
  );
};
