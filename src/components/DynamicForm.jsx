import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';
import { NavLink } from 'react-router-dom'; 
import "../styles/index.css";

const services = [
  { id: 1, name: 'MR Ländrygg', price: '3 900kr', paymentLink: 'https://buy.stripe.com/6oE5mBf5HcTB43maF6' },
  { id: 2, name: 'MR Höger Axel', price: '4 100kr', paymentLink: 'https://buy.stripe.com/aEU9CRbTv4n56bufZi' },
  { id: 3, name: 'MR Vänster Axel', price: '4 100kr', paymentLink: 'https://buy.stripe.com/dR68yN0aNf1J1VefZz' },
  { id: 4, name: 'MR Bäcken/höftleder', price: '3 900kr', paymentLink: 'https://buy.stripe.com/8wM9CR6zbbPxarK8wZ' },
  { id: 5, name: 'MR Vänster Knä', price: '3 900kr', paymentLink: 'https://buy.stripe.com/3csaGV3mZg5N6bu9AK' },
  { id: 6, name: 'MR Helkropp', price: '16 200kr', paymentLink: 'https://buy.stripe.com/4gw9CRcXz1aT2Zi5kB' },
  { id: 7, name: 'MR Bröstrygg', price: '3 900kr', paymentLink: 'https://buy.stripe.com/00gbKZ2iVg5N6bu8x1' },
  { id: 8, name: 'MR Höger Fot', price: '3 900kr', paymentLink: 'https://buy.stripe.com/eVa2ap5v74n58jC9AS' },
  { id: 9, name: 'MR Vänster Fot', price: '3 900kr', paymentLink: 'https://buy.stripe.com/14k16l4r34n5bvO7sA' },
  { id: 10, name: 'MR Höger Fotled', price: '3 900kr', paymentLink: 'https://buy.stripe.com/8wMbKZ0aN9Hp43m00m' },
  { id: 11, name: 'MR Vänster Fotled', price: '3 900kr', paymentLink: 'https://buy.stripe.com/00gaGV5v7cTBdDW3cj' },
  { id: 12, name: 'MR Höger Hand', price: '3 900kr', paymentLink: 'https://buy.stripe.com/dR6eXbe1D8DlarK6oJ' },
  { id: 13, name: 'MR Vänster Hand', price: '3 900kr', paymentLink: 'https://buy.stripe.com/00gdT7cXz9Hp6bu006' },
  { id: 14, name: 'MR Hälsena', price: '3 900kr', paymentLink: 'https://buy.stripe.com/cN27uJ3mZaLt2Zi5kQ' },
  { id: 15, name: 'MR Höger Armbåge', price: '3 900kr', paymentLink: 'https://buy.stripe.com/28o3etbTvdXF43m14u' },
  { id: 16, name: 'MR Vänster Armbåge', price: '3 900kr', paymentLink: 'https://buy.stripe.com/eVa02h6zb9Hp2ZidQV' },
  { id: 17, name: 'MR Höger Underben', price: '3 900kr', paymentLink: 'https://buy.stripe.com/00g16l0aNdXF2Zi28z' },
  { id: 18, name: 'MR Vänster Underben', price: '3 900kr', paymentLink: 'https://buy.stripe.com/cN2eXbf5HdXF2ZiaEI' },
  { id: 19, name: 'MR Sacrum/Sacroliacaleder', price: '3 900kr', paymentLink: 'https://buy.stripe.com/cN202hg9LbPx1Ve28F' },
  { id: 20, name: 'MR Buk', price: '6 500kr', paymentLink: 'https://buy.stripe.com/5kAcP3e1DcTBeI0aEE' },
  { id: 21, name: 'MR Hals/larynx', price: '5 800kr', paymentLink: 'https://buy.stripe.com/4gw2apbTvf1JarK00g'  },
  { id: 22, name: 'MR Nacke/Halsrygg', price: '3 900kr', paymentLink: 'https://buy.stripe.com/6oEaGVbTvaLt57q6oW' },
  { id: 23, name: 'MR Helrygg', price: '9 000kr', paymentLink: 'https://buy.stripe.com/4gw4ix9Ln8Dl8jC8wL' },
  { id: 24, name: 'MR Hjärna', price: '4 200kr', paymentLink: 'https://buy.stripe.com/8wM4ix6zb5r957qfZc' },
  { id: 25, name: 'MR Käkled', price: '4 800kr', paymentLink: 'https://buy.stripe.com/00g16l6zb6vd8jC7t1' },
  { id: 26, name: 'MR Höger Knä', price: '3 900kr', paymentLink: 'https://buy.stripe.com/7sI4ix7DfcTBbvO9AT'  },
  { id: 27, name: 'MR Orbita', price: '4 800kr', paymentLink: 'https://buy.stripe.com/6oEg1f6zb2eXarK00d' },
  { id: 28, name: 'MR Prostata', price: '5 800kr', paymentLink: 'https://buy.stripe.com/eVabKZf5Hg5N1VebIT' },
  {id: 29, name: 'MR Höger Överarm', price: '3 900kr', paymentLink: 'https://buy.stripe.com/8wM3etaPrf1JczSbJ5' },
  {id: 30, name: 'MR Vänster Överarm', price: '3 900kr', paymentLink: 'https://buy.stripe.com/9AQdT70aNf1J7fy6or' },
  {id: 31, name: 'MR Höger Underarm', price: '3 900kr', paymentLink: 'https://buy.stripe.com/aEU8yN0aN5r9fM4eV6' },
  {id: 32, name: 'MR Vänster Underarm', price: '3 900kr', paymentLink: 'https://buy.stripe.com/dR616l6zb6vd6bu3ce' },
  {id: 33, name: 'MR Höger Handled', price: '3 900kr', paymentLink: 'https://buy.stripe.com/7sI6qFcXzf1JczSeVi'  },
  {id: 34, name: 'MR Vänster Handled', price: '3 900kr', paymentLink: 'https://buy.stripe.com/fZe8yN0aNaLtgQ85kl'  },
    { id: 35, name: 'MR Ländrygg (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/00gg1f2iVf1JczS5kW' },
    { id: 36, name: 'MR Höger Axel (K)', price: '6 100kr', paymentLink: 'https://buy.stripe.com/28obKZ5v706P43meVx' },
    { id: 37, name: 'MR Vänster Axel (K)', price: '6 100kr', paymentLink: 'https://buy.stripe.com/aEUg1f1eR3j12Zi14I' },
    { id: 38, name: 'MR Bäcken/höftleder (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/5kA4ix0aNg5N0Ra5kZ' },
    { id: 39, name: 'MR Vänster Knä (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/dR64ixaPrcTBbvO6p4' },
    { id: 40, name: 'MR Helkropp (K)', price: '18 200kr', paymentLink: 'https://buy.stripe.com/7sI7uJ4r3g5NfM4fZF' },
    { id: 41, name: 'MR Bröstrygg (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/7sI2ap1eR5r9arKbJq' },
    { id: 42, name: 'MR Höger Fot (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/14k6qFg9L9Hp7fy14N' },
    { id: 43, name: 'MR Vänster Fot (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/4gw3et4r3aLteI07tc' },
    { id: 44, name: 'MR Höger Fotled (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/cN2bKZ2iV2eX2Zi6p9' },
    { id: 45, name: 'MR Vänster Fotled (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/cN216l7Df4n5bvO8xi' },
    { id: 46, name: 'MR Höger Hand (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/4gwbKZ0aN6vd9nG7tf' },
    { id: 47, name: 'MR Vänster Hand (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/bIYbKZ1eR2eX9nG6pc' },
    { id: 48, name: 'MR Hälsena (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/3cs4ix6zbaLt2Zi4h5' },
    { id: 49, name: 'MR Höger Armbåge (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/00g6qF7Df8DlarK6pe' },
    { id: 50, name: 'MR Vänster Armbåge (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/7sI5mB0aN7zhczScND' },
    { id: 51, name: 'MR Höger Underben (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/dR69CR9Ln5r9arK5lc' },
    { id: 52, name: 'MR Vänster Underben (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/9AQdT71eRdXFdDW00T' },
    { id: 53, name: 'MR Sacrum/Sacroliacaleder (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/3cs8yN0aN6vd9nGfZS' },
    { id: 54, name: 'MR Buk (K)', price: '8 500kr', paymentLink: 'https://buy.stripe.com/cN2bKZcXzg5NeI06pj' },
    { id: 55, name: 'MR Hals/larynx (K)', price: '7 800kr', paymentLink: 'https://buy.stripe.com/9AQ9CR7Df9HparK7to' },
    { id: 56, name: 'MR Nacke/Halsrygg (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/7sIcP37Df3j12Zi295' },
    { id: 57, name: 'MR Helrygg (K)', price: '11 000kr', paymentLink: 'https://buy.stripe.com/4gw02h6zbg5N43m9By' },
    { id: 58, name: 'MR Hjärna (K)', price: '6 200kr', paymentLink: 'https://buy.stripe.com/4gweXbg9Lg5NarK3db' },
    { id: 59, name: 'MR Käkled (K)', price: '6 800kr', paymentLink: 'https://buy.stripe.com/4gw7uJ9LndXF8jCfZY' },
    { id: 60, name: 'MR Höger Knä (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/5kAdT7bTvbPx6bu9BB' },
    { id: 61, name: 'MR Orbita (K)', price: '6 800kr', paymentLink: 'https://buy.stripe.com/dR6eXb9Lng5NfM4dRS' },
    { id: 62, name: 'MR Prostata (K)', price: '7 800kr', paymentLink: 'https://buy.stripe.com/bIYg1f7Df9Hp7fy6pr' },
    { id: 63, name: 'MR Höger Överarm (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/5kAaGV9Ln5r957qbJM' },
    { id: 64, name: 'MR Vänster Överarm (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/bIY3etf5HcTBgQ84hl' },
    { id: 65, name: 'MR Höger Underarm (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/aEUbKZg9L9HpgQ8aFK' },
    { id: 66, name: 'MR Vänster Underarm (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/14k2apf5H3j1dDWaFL' },
    { id: 67, name: 'MR Höger Handled (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/3cs3etaPr5r90Ra29g' },
    { id: 68, name: 'MR Vänster Handled (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/3cs9CRf5H7zh1Ve29h' },
    { id: 69, name: 'CT Ländrygg', price: '3 900kr', paymentLink: 'https://buy.stripe.com/4gw16l8Hj7zhbvO3dm' },
    { id: 70, name: 'CT Höger Axel', price: '4 100kr', paymentLink: 'https://buy.stripe.com/4gw4ix8Hj2eXfM45lv' },
    { id: 71, name: 'CT Vänster Axel', price: '4 100kr', paymentLink: 'https://buy.stripe.com/fZe4ix1eR7zhczSeW6' },
    { id: 72, name: 'CT Bäcken/höftleder', price: '3 900kr', paymentLink: 'https://buy.stripe.com/28og1f5v706PgQ829l' },
    { id: 73, name: 'CT Vänster Knä', price: '3 900kr', paymentLink: 'https://buy.stripe.com/aEUeXbg9L7zh57q7tG' },
    { id: 75, name: 'CT Bröstrygg', price: '3 900kr', paymentLink: 'https://buy.stripe.com/dR68yN7Df2eXczS9BQ' },
    { id: 76, name: 'CT Höger Fot', price: '3 900kr', paymentLink: 'https://buy.stripe.com/14kaGV4r3dXFdDW29p' },
    { id: 77, name: 'CT Vänster Fot', price: '3 900kr', paymentLink: 'https://buy.stripe.com/cN202hg9LbPxarK15m' },
    { id: 78, name: 'CT Höger Fotled', price: '3 900kr', paymentLink: 'https://buy.stripe.com/cN2g1f6zbbPxdDW01j' },
    { id: 79, name: 'CT Vänster Fotled', price: '3 900kr', paymentLink: 'https://buy.stripe.com/9AQcP35v78Dl7fyaFY' },
    { id: 80, name: 'CT Höger Hand', price: '3 900kr', paymentLink: 'https://buy.stripe.com/8wMdT7aPr9HpgQ86pJ' },
    { id: 81, name: 'CT Vänster Hand', price: '3 900kr', paymentLink: 'https://buy.stripe.com/14kg1f0aN3j12Zi8xS' },
    { id: 82, name: 'CT Hälsena', price: '3 900kr', paymentLink: 'https://buy.stripe.com/bIY16le1D7zharKeWh' },
    { id: 83, name: 'CT Höger Armbåge', price: '3 900kr', paymentLink: 'https://buy.stripe.com/fZe4ix9Lnf1JczScOa' },
    { id: 84, name: 'CT Vänster Armbåge', price: '3 900kr', paymentLink: 'https://buy.stripe.com/3cs16l5v7f1J9nG15t' },
    { id: 85, name: 'CT Höger Underben', price: '3 900kr', paymentLink: 'https://buy.stripe.com/7sI3etg9L8DlarK29y' },
    { id: 86, name: 'CT Vänster Underben', price: '3 900kr', paymentLink: 'https://buy.stripe.com/4gw5mB2iV3j1gQ86pP' },
    { id: 87, name: 'CT Sacrum/Sacroliacaleder', price: '3 900kr', paymentLink: 'https://buy.stripe.com/fZe6qF4r38DldDW7tU' },
    { id: 88, name: 'CT Buk', price: '6 500kr', paymentLink: 'https://buy.stripe.com/dR62apf5H3j12Zi6pR' },
    { id: 89, name: 'CT Hals/larynx', price: '5 800kr', paymentLink: 'https://buy.stripe.com/eVaeXb1eRbPx0RacOg' },
    { id: 90, name: 'CT Nacke/Halsrygg', price: '3 900kr', paymentLink: 'https://buy.stripe.com/4gw5mB3mZ06P8jC6pT' },
    { id: 91, name: 'CT Helrygg', price: '9 000kr', paymentLink: 'https://buy.stripe.com/aEUeXb2iVaLt8jC5lQ' },
    { id: 92, name: 'CT Hjärna', price: '4 200kr', paymentLink: 'https://buy.stripe.com/bIY6qFg9LcTB1VeeWr' },
    { id: 93, name: 'CT Käkled', price: '4 800kr', paymentLink: 'https://buy.stripe.com/8wMaGVe1Dg5NdDWbKg' },
    { id: 94, name: 'CT Höger Knä', price: '3 900kr', paymentLink: 'https://buy.stripe.com/3cs5mB2iVbPx57qcOl' },
    { id: 95, name: 'CT Orbita', price: '4 800kr', paymentLink: 'https://buy.stripe.com/7sIcP34r36vd43mcOm' },
    { id: 96, name: 'CT Prostata', price: '5 800kr', paymentLink: 'https://buy.stripe.com/00gcP35v7f1J6bu3dN' },
    { id: 97, name: 'CT Höger Överarm', price: '3 900kr', paymentLink: 'https://buy.stripe.com/14keXbf5H06P9nG8y8' },
    { id: 98, name: 'CT Vänster Överarm', price: '3 900kr', paymentLink: 'https://buy.stripe.com/8wMcP3bTv1aT7fyeWx' },
    { id: 99, name: 'CT Höger Underarm', price: '3 900kr', paymentLink: 'https://buy.stripe.com/7sI4ix2iVcTBeI0dSu' },
    { id: 100, name: 'CT Vänster Underarm', price: '3 900kr', paymentLink: 'https://buy.stripe.com/aEU9CR7Dff1J0RaeWz' },
    { id: 101, name: 'CT Höger Handled', price: '3 900kr', paymentLink: 'https://buy.stripe.com/dR67uJ5v7g5N9nG9Cg' },
    { id: 102, name: 'CT Vänster Handled', price: '3 900kr', paymentLink: 'https://buy.stripe.com/eVa02h0aN8DlgQ8eWB' },
      { id: 103, name: 'CT Ländrygg (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/cN2aGV5v79Hp57q4hY' },
      { id: 104, name: 'CT Höger Axel (K)', price: '6 100kr', paymentLink: 'https://buy.stripe.com/14k5mBaPr1aT57qeWD' },
      { id: 105, name: 'CT Vänster Axel (K)', price: '6 100kr', paymentLink: 'https://buy.stripe.com/6oE7uJ4r33j17fybKs' },
      { id: 106, name: 'CT Bäcken/höftleder (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/dR6eXbaPr7zh9nG15P' },
      { id: 107, name: 'CT Vänster Knä (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/dR6eXbaPr7zh9nG15P' },
      { id: 109, name: 'CT Bröstrygg (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/6oE4ix4r35r9fM47ug' },
      { id: 110, name: 'CT Höger Fot (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/cN2aGVbTvaLtbvO15T' },
      { id: 111, name: 'CT Vänster Fot (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/bIY02h2iVdXFfM4eWK' },
      { id: 112, name: 'CT Höger Fotled (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/dR62ap8HjcTB1Ve4i7' },
      { id: 113, name: 'CT Vänster Fotled (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/cN22ap7Df6vdfM4bKA' },
      { id: 114, name: 'CT Höger Hand (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/eVadT74r3bPxeI0dSJ' },
      { id: 115, name: 'CT Vänster Hand (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/7sIcP39LncTB6budSK' },
      { id: 116, name: 'CT Hälsena (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/5kAbKZbTvcTB7fy2a3' },
      { id: 117, name: 'CT Höger Armbåge (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/00gcP3f5H3j1arK6qk' },
      { id: 118, name: 'CT Vänster Armbåge (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/dR6bKZ8HjdXF1Ve4id' },
      { id: 119, name: 'CT Höger Underben (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/9AQ16l1eR5r9fM4bKG' },
      { id: 120, name: 'CT Vänster Underben (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/eVa4ix6zbdXF7fy9Cz' },
      { id: 121, name: 'CT Sacrum/Sacroliacaleder (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/cN2aGVg9L4n5arK6qo' },
      { id: 122, name: 'CT Buk (K)', price: '8 500kr', paymentLink: 'https://buy.stripe.com/3csbKZcXzg5NbvO165' },
      { id: 123, name: 'CT Hals/larynx (K)', price: '7 800kr', paymentLink: 'https://buy.stripe.com/3cs5mBaPr9Hp9nG022' },
      { id: 124, name: 'CT Nacke/Halsrygg (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/14k4ixg9L3j143m8yz' },
      { id: 125, name: 'CT Helrygg (K)', price: '11 000kr', paymentLink: 'https://buy.stripe.com/cN202h8Hj6vddDW7uw' },
      { id: 126, name: 'CT Hjärna (K)', price: '6 200kr', paymentLink: 'https://buy.stripe.com/3cscP3cXzf1J57q025' },
      { id: 127, name: 'CT Käkled (K)', price: '6 800kr', paymentLink: 'https://buy.stripe.com/00g8yN6zbf1J8jC5mq' },
      { id: 128, name: 'CT Höger Knä (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/8wM5mBbTvf1J0RaaGL' },
      { id: 129, name: 'CT Orbita (K)', price: '6 800kr', paymentLink: 'https://buy.stripe.com/cN24ixf5Hf1JdDW5ms' },
      { id: 130, name: 'CT Prostata (K)', price: '7 800kr', paymentLink: 'https://buy.stripe.com/28o5mB0aN6vd8jCaGU' },
      { id: 131, name: 'CT Höger Överarm (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/8wM7uJ1eRcTBbvO4iq' },
      { id: 132, name: 'CT Vänster Överarm (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/3csg1f3mZ2eX1Ve16f' },
      { id: 133, name: 'CT Höger Underarm (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/6oEeXbf5H7zh1Ve4is' },
      { id: 134, name: 'CT Vänster Underarm (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/6oE3et1eRaLt43m02d' },
      { id: 135, name: 'CT Höger Handled (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/3csdT78Hj1aT6bu7uG' },
      { id: 136, name: 'CT Vänster Handled (K)', price: '5 900kr', paymentLink: 'https://buy.stripe.com/3csdT78Hj1aT6bu7uG' }
    
    

];

const DynamicForm = () => {
  const [selectedExamination, setSelectedExamination] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [showExaminationDropdown, setShowExaminationDropdown] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Use location to access passed state

  const cities = [
  'Göteborg Backa',
  'Göteborg Haga',
  'Göteborg Mölndal',
  'Jönköping',
  'Karlstad',
  'Malmö Hyllie',
  'Stockholm Farsta',
  'Stockholm Järva',
  'Stockholm Klara Strand',
  'Stockholm Nacka',
  'Stockholm Sabbatsberg',
  'Stockholm Skärholmen',
  'Stockholm Sollentuna',
  'Stockholm Vällingby',
  'Sundsvall',
  'Umeå',
  'Uppsala',
  'Västerås'
     ];

  // Extract serviceName from the passed state
  useEffect(() => {
    if (location.state && location.state.serviceName) {
      setSelectedExamination(location.state.serviceName);
    }
  }, [location.state]);

  const toggleExaminationDropdown = () => setShowExaminationDropdown(!showExaminationDropdown);
  const toggleCityDropdown = () => setShowCityDropdown(!showCityDropdown);

  const handleExaminationClick = (name) => {
    setSelectedExamination(name);
    setShowExaminationDropdown(false);
  };

  const handleCityClick = (city) => {
    setSelectedCity(city);
    setShowCityDropdown(false);
  };

  const selectedService = services.find(service => service.name === selectedExamination);

  const handleBookClick = () => {
    // Save selected service details in localStorage
  localStorage.setItem(
    'bookingData',
    JSON.stringify({
      serviceName: selectedExamination,
      city: selectedCity,
      price: selectedService?.price,
      paymentLink: selectedService?.paymentLink,
    })
  );

  // Navigate to the booking page with the selected details
  navigate('/mri-boka', {
    state: {
      serviceName: selectedExamination,
      city: selectedCity,
      price: selectedService?.price,
      paymentLink: selectedService?.paymentLink,
    },
  });
};


  return (
    <div className='container-form-main'>
    <div className="form-container">
      <div></div>
      <h2 className='text-center main-title-form'>Boka privat röntgen utan remiss</h2>

      <form>
        <div className="form-group">
         
          <button type="button" className="dropdown-toggle" onClick={toggleExaminationDropdown}>
            {selectedExamination || 'Välj undersökning'}
          </button>
          {showExaminationDropdown && (
            <div className="dropdown-content">
              {services.map(service => (
                <button key={service.id} type="button" className="dropdown-button" onClick={() => handleExaminationClick(service.name)}>
                  {service.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {selectedExamination && (
          <div className="form-group">
            <p className='form-field-title'>Välj stad (A-Ö)</p>
            <button type="button" className="dropdown-toggle" onClick={toggleCityDropdown}>
              {selectedCity || 'Välj stad'}
            </button>
            {showCityDropdown && (
              <div className="dropdown-content">
                {cities.map(city => (
                  <button key={city} type="button" className="dropdown-button" onClick={() => handleCityClick(city)}>
                    {city}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {selectedExamination && selectedCity && (
          <>
            <div className="form-group">
              <p className='form-price'>Pris: {selectedService?.price}</p>
            </div>
            <div className="form-group">
              <button type="button" className="btn-navbar" onClick={handleBookClick}>
                Boka undersökning
              </button>
            </div>
          </>

        )}
        <NavLink to="/villkor" className="restrictions"> Villkor och Begränsningar </NavLink>

      </form>
      <div></div>
    </div>
    </div>
  );
};

export default DynamicForm;



