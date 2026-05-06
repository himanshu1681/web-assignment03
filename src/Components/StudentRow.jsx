function StudentRow({ student, updateScore }) {
  const handleChange = (e) => {
    updateScore(student.id, e.target.value);
  };

  const status = student.score >= 40 ? "Pass" : "Fail";

  return (
    <tr>
      <td>{student.name}</td>
      <td>
        <input 
          type="number" 
          value={student.score} 
          onChange={handleChange}
        />
      </td>
      <td style={{ color: status === "Pass" ? "green" : "red" }}>
        {status}
      </td>
    </tr>
  );
}

export default StudentRow;