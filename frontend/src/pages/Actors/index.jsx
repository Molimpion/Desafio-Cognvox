import React from "react";
import PageHeader from "./components/PageHeader";
import ActorFilters from "./components/ActorFilters";
import ActorTable from "./components/ActorTable";

const ActorPage = () => {
  return (
    <>
      <PageHeader />
      <ActorFilters />
      <ActorTable />
      <div className="caixa">cod.:2pt-br</div>
    </>
  );
};

export default ActorPage;
