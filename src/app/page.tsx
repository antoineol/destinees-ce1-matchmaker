'use client';

import { TrainingListPage } from './front/details/TrainingListPage';
import { allTrainingsRaw, clone } from './front/details/trainings';
import { prepareTrainings } from './front/prepare-trainings';
import './front/details/style.css';

export default function RootPage() {
  const allTrainings = clone(allTrainingsRaw);

  const filteredTrainings = prepareTrainings(allTrainings);

  return <TrainingListPage allTrainings={allTrainings} filteredTrainings={filteredTrainings} />;
}
