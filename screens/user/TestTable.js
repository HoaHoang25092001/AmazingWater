import React, { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useDispatch, useSelector } from "react-redux";
import { hopDong } from "../../store/asyncAction";

const GET_HOP_DONGS = gql`
  query {
    GetHopDongs(first: 100) {
      nodes {
        keyId
        id
        camKetSuDungNuoc
        chungTu
        createdBy
        diachi
        khachHang {
          tenKhachHang
        }
        dongHoNuocs {
          maDHThay
          tenDongHo
        }
      }
    }
  }
`;

function TestTable() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.soDocChiSo);

  useEffect(() => {
    console.log("Data test:", data);
  }, []);

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

export default TestTable;
