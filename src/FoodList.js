// src/components/FoodMenuList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // เพิ่มการ import ไฟล์ CSS

const FoodMenuList = () => {
  const [menu, setFastFoodMenu] = useState([]);
  const [noodle, setNoodleMenu] = useState([]);
  const [fried, setFriedMenu] = useState([]);
  const [friedRice, setFriedRiceMenu] = useState([]);
  const [egg, setEggMenu] = useState([]);
  const [withoutRice, setWithoutRiceMenu] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/getFastFoodMenu')
      .then(response => {
        setFastFoodMenu(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8080/api/getNoodleMenu')
      .then(response => {
        setNoodleMenu(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8080/api/getFriedMenu')
      .then(response => {
        setFriedMenu(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8080/api/getFriedRiceMenu')
      .then(response => {
        setFriedRiceMenu(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8080/api/getEggMenu')
      .then(response => {
        setEggMenu(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8080/api/getWithoutRiceMenu')
      .then(response => {
        setWithoutRiceMenu(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="food-menu-container">
      <h1>ร้าน ครัวแสนอร่อย</h1>
      <h3>รับทำข้าวกล่อง อาหารตามสั่ง ราคากันเอง โทร 081-234-5678</h3>
      
      {/* ตารางสำหรับ Fast Food */}
      <table className="food-menu-table">
        <thead>
          <tr>
            <th colSpan="2" className="section-header">Fast Food Menu</th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {menu.map(item => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.price.toFixed(2)} Bath</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ตารางสำหรับ Noodle */}
      <table className="food-menu-table">
        <thead>
          <tr>
            <th colSpan="2" className="section-header">Noodle Menu</th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {noodle.map(item => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.price.toFixed(2)} Bath</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ตารางสำหรับ Fried */}
      <table className="food-menu-table">
        <thead>
          <tr>
            <th colSpan="2" className="section-header">Fried Menu</th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {fried.map(item => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.price.toFixed(2)} Bath</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ตารางสำหรับ Fried Rice */}
      <table className="food-menu-table">
        <thead>
          <tr>
            <th colSpan="2" className="section-header">Fried Rice Menu</th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {friedRice.map(item => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.price.toFixed(2)} Bath</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ตารางสำหรับ Egg */}
      <table className="food-menu-table">
        <thead>
          <tr>
            <th colSpan="2" className="section-header">Egg Menu</th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {egg.map(item => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.price.toFixed(2)} Bath</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ตารางสำหรับ Without Rice */}
      <table className="food-menu-table">
        <thead>
          <tr>
            <th colSpan="2" className="section-header">Without Rice Menu</th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {withoutRice.map(item => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.price.toFixed(2)} Bath</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FoodMenuList;
