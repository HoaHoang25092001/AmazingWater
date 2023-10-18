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

  const fetchGraphQLData = () => {
    dispatch(hopDong(GET_HOP_DONGS));
    console.log("Data ne", data);
  };

  useEffect(() => {
    fetchGraphQLData();
  }, []);
  const { loading, error, data } = useQuery(GET_HOP_DONGS);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const hopDongs = data.GetHopDongs.nodes;
  return (
    <View>
      {hopDongs.map((hopDong) => (
        <View key={hopDong.id}>
          <Text>Key ID: {hopDong.keyId}</Text>
          <Text>ID: {hopDong.id}</Text>
          <Text>Cam Kết Sử Dụng Nước: {hopDong.camKetSuDungNuoc}</Text>
          {/* Thêm các trường dữ liệu khác ở đây */}
          {hopDong.khachHang && (
            <Text>Tên Khách Hàng: {hopDong.khachHang.tenKhachHang}</Text>
          )}
          {hopDong.dongHoNuocs.map((dongHo) => (
            <View key={dongHo.maDHThay}>
              <Text>Mã Đồng Hồ Thay: {dongHo.maDHThay}</Text>
              <Text>Tên Đồng Hồ: {dongHo.tenDongHo}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

export default TestTable;
