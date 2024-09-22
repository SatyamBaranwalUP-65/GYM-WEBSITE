import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        A top workout session in the gym focuses on a mix of strength and cardio exercises, including squats, deadlifts, bench presses, and HIIT for full-body conditioning, fat loss, and muscle building.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Bootcamps combine strength, cardio, and functional exercises in group settings, offering variety, motivation, and scalability for all fitness levels
        </p>
        <div className="bootcamps">
          <div>
            <h4>Specific Fitness Goals.</h4>
            <p>
            Offer different bootcamps based on user goals, such as weight loss, muscle building, or cardio conditioning.
            </p>
          </div>
          <div>
            <h4>Group Training.</h4>
            <p>
            Emphasize the social aspect by hosting group bootcamps that build camaraderie, motivation, and accountability.
            </p>
          </div>
          <div>
            <h4>Schedules and Timings.</h4>
            <p>
              LInclude flexible scheduling options to accommodate different user availability (e.g., early morning, late evening bootcamps).
            </p>
          </div>
          <div>
            <h4>High-Intensity Programs.</h4>
            <p>
            Bootcamps should be designed to deliver intense workouts targeting fat loss, strength, and endurance through time-efficient sessions.
            </p>
          </div>
          <div>
            <h4>Trainers.</h4>
            <p>
            Feature certified trainers with specialties in different fitness areas to guide participants through the bootcamps.
            </p>
          </div>
          <div>
            <h4>Progress Tracking.</h4>
            <p>
            Provide tools or features in the app to track individual progress during the bootcamp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
