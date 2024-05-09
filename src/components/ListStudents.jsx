import React, { useState, useEffect } from 'react';
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
  Button,
} from "@material-tailwind/react";
import axios from 'axios';

export function ListStudents() {
  const [students, setStudents] = useState([]);
  const fetchStudents = async () => {
    try {
      const response = await axios.get('https://stu-backend-8l25i2zwq-chetans-projects-9b041f40.vercel.app/students/get');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };
  
  useEffect(() => {

    fetchStudents();
  }, []);
  


  return (
    <Card className="w-96">
      <Button color="blue" onClick={fetchStudents}>Fetch Students</Button>
      <div style={{
        maxHeight: '600px',
        overflowY: 'auto',
        transition: 'max-height 0.3s ease-in-out', // Added transition property
        scrollbarWidth: 'none', // Hide scrollbar for Firefox
        '-ms-overflow-style': 'none', // Hide scrollbar for IE and Edge
        '&::-webkit-scrollbar': {
          width: '0', // Hide scrollbar for Chrome, Safari, and Opera
        },
      }}>
        <List>
          {students.map((stu, index) => (
            <ListItem key={`${stu.student_id}-${index}`}>
              <ListItemPrefix>
                <Avatar variant="circular" alt={stu.first_name} src={stu.student_dp} />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  {stu.first_name +' '+ stu.last_name }
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  ID: {stu.student_id}
                </Typography>
              </div>
            </ListItem>
          ))}
        </List>
      </div>
    </Card>
  );
}
