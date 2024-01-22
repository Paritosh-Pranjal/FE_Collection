import TextField from 'components/atoms/TextField';
import StudentTable from 'components/molecules/Table';
import React, { useEffect, useState } from 'react';
import { fetchAllUsers } from 'services/calls';
import { studentColumns, studentRows } from 'utils';

const StudentRecord = () => {
  const [studentData, setStudentData] = useState<any[]>([]);
  const [studentApiRows, setStudentApiRows] = useState<any[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAllUsers();
        setStudentData(response.data.data);
        setStudentApiRows(response.data.data);
      } catch (error) {
        throw new Error('Error fetching');
      }
    };
    fetchData();
  }, []);

  const handleSearchField = (e: any) => {
    const value = e.target.value;
    setInput(value);

    const filterStudentRow = studentData.filter((item, index) =>
      item.first_name.toLowerCase().includes(value.toLowerCase())
    );
    setStudentApiRows(filterStudentRow);
  };

  const filterRow = studentRows.filter((item) => {
    const regrexValue = new RegExp(input, 'i');
    return regrexValue.test(item.first_name);
  });

  return (
    <div>
      <TextField
        fullWidth
        placeholder="Enter the first name of student"
        onChange={handleSearchField}
      />

      <StudentTable rows={filterRow} columns={studentColumns} />
      <StudentTable rows={studentApiRows} columns={studentColumns} />
    </div>
  );
};

export default StudentRecord;
