import React from 'react';
import 'bulma/css/bulma.min.css';
import { Box, Table, Image } from 'react-bulma-components';

class table extends React.Component {
    render() {
        return (
            <Box mt='3'>
                <Table size='fullwidth'>
                    <thead>
                        <tr>
                            <th>
                                Title
                            </th>
                            <th>Url</th>
                            <th>
                                Description
                            </th>
                            <th>
                                Preview
                            </th>
                            <th>
                                Created at
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <a href="http://www.google.com.tw/" target="_blank" >Google</a>
                            </td>
                            <td>http://www.google.com.tw/</td>
                            <td>設定 · 你在Google 搜尋中的資料 · 隱藏含有煽情露骨內容的搜尋結果：關閉. 深色主題：關閉. 搜尋服務的運作方式 · 説明 提供意見. 全部圖片 · 登入. Google.
                            </td>
                            <td>
                                <Image size="4by3" src="https://wallpapercave.com/wp/tU89SSy.jpg" />
                            </td>
                            <td>2022/6/28 19:25:43</td>
                            <td><a>See more</a></td>
                        </tr>
                    </tbody>
                </Table>
            </Box>
        );

    }
}

export default table;