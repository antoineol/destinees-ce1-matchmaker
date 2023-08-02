'use client';

import { TrainingListPage } from './details/TrainingListPage';
import { allTrainingsRaw, clone } from './details/trainings';
import { prepareTrainings } from './prepare-trainings';
import './details/style.css';

export default function RootPage() {
  const allTrainings = clone(allTrainingsRaw);

  const filteredTrainings = prepareTrainings(allTrainings);

  return <TrainingListPage allTrainings={allTrainings} filteredTrainings={filteredTrainings} />;
}
