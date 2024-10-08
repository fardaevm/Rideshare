import React, { useEffect, useState } from 'react';
import { Breadcrumb} from 'react-bootstrap';
import TripCard from './TripCard';
import { isDriver } from '../services/AuthService';
import { getTrips } from '../services/TripService';
import { Navigate } from 'react-router-dom';
function Driver (props) {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        const loadTrips = async () => {
            const { response, isError } = await getTrips();
            if (isError) {
                setTrips([]);
            } else {
                setTrips(response.data);
            }
        };
        loadTrips();
    }, []);

    if (!isDriver()){
        return <Navigate to='/' />
    }

    const getCurrentTrips = () => {
        return trips.filter(trip => {
            return trip.driver !== null && trip.status !== 'COMPLETED';
        });
    };

    const getRequestedTrips = () => {
        return trips.filter(trip => {
          return trip.status === 'REQUESTED';
        });
    };

    const getCompletedTrips = () => {
        return trips.filter(trip => {
            return trip.status === 'COMPLETED';
        });
    };

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
        <TripCard
          title='Current Trip'
          trips={getCurrentTrips()}
          group='driver'
          otherGroup='rider'
        />
        <TripCard
          title='Requested Trips'
          trips={getRequestedTrips()}
          group='driver'
          otherGroup='rider'
        />
        <TripCard
          title='Recent Trips'
          trips={getCompletedTrips()}
          group='driver'
          otherGroup='rider'
        />
    </>
  );
}

export default Driver;