import React, { useState, useEffect } from "react";
import { getTrainings, createTraining, updateTraining } from "../utils/api";

const TrainingPage = () => {
const [trainings, setTrainings] = useState([]);
const [training, setTraining] = useState({
name: "",
questions: [],
});

useEffect(() => {
getTrainings().then((res) => setTrainings(res));
}, []);

const handleCreateTraining = async (e) => {
e.preventDefault();
try {
await createTraining(training);
const updatedTrainings = await getTrainings();
setTrainings(updatedTrainings);
setTraining({ name: "", questions: [] });
} catch (error) {
console.error(error);
}
};

const handleUpdateTraining = async (e, id) => {
e.preventDefault();
try {
await updateTraining(id, training);
const updatedTrainings = await getTrainings();
setTrainings(updatedTrainings);
} catch (error) {
console.error(error);
}
};

return (
<div>
<form onSubmit={handleCreateTraining}>
<label htmlFor="training-name">Training Name:</label>
<input
type="text"
id="training-name"
value={training.name}
onChange={(e) => setTraining({ ...training, name: e.target.value })}
/>
<button type="submit">Create Training</button>
</form>
<div>
{trainings.map((t) => (
<div key={t.id}>
<h3>{t.name}</h3>
<button onClick={(e) => handleUpdateTraining(e, t.id)}>
Update
</button>
</div>
))}
</div>
</div>
);
};

export default TrainingPage;