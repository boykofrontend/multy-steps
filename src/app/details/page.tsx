"use client";

import Button from "@/src/components/Button";
import { cookiesGetCompletedForm } from "@/src/utils/cookiesManager";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";

type formDataType = {
  [key: string]: string | number;
};

const Details: FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<formDataType>({});

  useEffect(() => {
    if (formData) {
      const cachedFormData = cookiesGetCompletedForm() || {};

      setFormData(cachedFormData);
    }
  }, []);

  const handleHomeRedirect = (): void => {
    router.push("/");
  };

  return (
    <div className="details-page">
      <h2 className="details-title">Created project details:</h2>
      {!formData.radioTag && (
        <div className="details-description">
          You haven&apos;t created a project yet
        </div>
      )}
      {formData.radioTag && (
        <div className="details-wrapper">
          <p className="details-item">
            Project name: <span>{formData.projectName}</span>
          </p>
          <p className="details-item">
            Project url: <span>{formData.projectUrl}</span>
          </p>
          <p className="details-item">
            Project category: <span>{formData.radioTag}</span>
          </p>
          <p className="details-item">
            Project main goal: <span>{formData.radioGoal}</span>
          </p>
          <p className="details-item">
            Project full-time workers: <span>{formData.quantityCount}</span>
          </p>
          <p className="details-item">
            Project launch: <span>{formData.radioProject}</span>
          </p>
          <p className="details-item">
            Project email: <span>{formData.email}</span>
          </p>
        </div>
      )}
      <Button
        className="details-btn"
        name="Go to home page"
        onClick={handleHomeRedirect}
      />
    </div>
  );
};

export default Details;
