<template>
  <div class="container">
    <div class="register_bg"></div>
    <div class="register_width">
      <div class="register_title"><b>News</b></div>
      <div class="register_txt">
        <div class="news_top">
          <div class="news_top_Search">
            <el-input
              v-model="a"
              class="form-input news-input"
              placeholder="Search..."
            >
              <el-button slot="append" icon="iconfont icon-search"></el-button>
            </el-input>
          </div>
          <div class="news_top_date">
            <b>Date Filter</b>
            <el-date-picker
              v-model="date"
              type="date"
              class="form-input news-input"
              format="yyyy-MM-dd"
              placeholder="Filter by designated date"
            >
            </el-date-picker>
            <i class="fa fa-calendar"></i>
          </div>
          <div class="news_top_but">
            <button class="register_botton_a">Reset</button>
          </div>
        </div>
        <div class="news_list">
          <div class="news_list_header">
            <div class="title_24">Date of lssue</div>
            <div class="title_24">Title</div>
          </div>
          <div
            class="news_list_content"
            v-for="(item, index) in newsLists"
            :key="index"
          >
            <div class="news_list_content_date">{{ item.date }}</div>
            <div class="news_list_content_tips">{{ item.title }}</div>
          </div>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      newsLists: [
        {
          date: "2022/8/12",
          title:
            "Removal Notice: Service Suspension of Map Sales and Survey Data Services Counter at District Survey Office / Yuen Long.",
        },
        {
          date: "2022/8/15",
          title:
            "Removal Notice: Service Suspension of Map Sales and Survey Data Services Counter at District Survey Office / Yuen Long.",
        },
        {
          date: "2022/8/3",
          title: "Government to sell site in Kwun Tong by public tender.",
        },
        {
          date: "2022/8/30",
          title: "	Government to sell site in Kwun Tong by public tender.",
        },
        {
          date: "2022/8/30",
          title:
            "Removal Notice: Service Suspension of Map Sales and Survey Data Services Counter at District Survey Office / Yuen Long.",
        },
        {
          date: "2022/8/12",
          title:
            "Removal Notice: Service Suspension of Map Sales and Survey Data Services Counter at District Survey Office / Yuen Long.",
        },
        {
          date: "2022/8/15",
          title:
            "Removal Notice: Service Suspension of Map Sales and Survey Data Services Counter at District Survey Office / Yuen Long.",
        },
        {
          date: "2022/8/3",
          title: "Government to sell site in Kwun Tong by public tender.",
        },
        {
          date: "2022/8/30",
          title: "	Government to sell site in Kwun Tong by public tender.",
        },
        {
          date: "2022/8/30",
          title:
            "Removal Notice: Service Suspension of Map Sales and Survey Data Services Counter at District Survey Office / Yuen Long.",
        },
        {
          date: "2022/8/12",
          title:
            "Removal Notice: Service Suspension of Map Sales and Survey Data Services Counter at District Survey Office / Yuen Long.",
        },
        {
          date: "2022/8/15",
          title:
            "Removal Notice: Service Suspension of Map Sales and Survey Data Services Counter at District Survey Office / Yuen Long.",
        },
        {
          date: "2022/8/3",
          title: "Government to sell site in Kwun Tong by public tender.",
        },
        {
          date: "2022/8/30",
          title: "	Government to sell site in Kwun Tong by public tender.",
        },
        {
          date: "2022/8/30",
          title:
            "Removal Notice: Service Suspension of Map Sales and Survey Data Services Counter at District Survey Office / Yuen Long.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  .el-input {
    width: 100%;
  }
  .form-input {
    &::v-deep .el-input__inner {
      border: 1px solid #3d9dd1;
      border-radius: 10px;
      background: #ecf6fb;
      padding: 10px 15px;
      font-size: 16px;
      width: 100%;
      &::placeholder {
        color: #2079a9;
      }
    }
    &::v-deep .el-input-group__append {
      position: absolute;
      top: 10px;
      right: 12px;
      z-index: 1000;
      background: #ecf6fb;
      border: none;
      color: #2079a9;
    }
    &::v-deep .el-input__prefix {
      display: none;
    }
  }
  .news-input {
    &::v-deep .el-input__inner {
      border: 1px solid #3d9dd1;
      border-radius: 20px;
      background: #ecf6fb;
      padding: 10px 15px;
      font-size: 16px;
      width: 100%;
      &::placeholder {
        color: #2079a9;
      }
    }
    &::v-deep .el-input__suffix {
      .el-input__icon {
        font-size: 20px;
        font-weight: 500;
        color: #2079a9;
      }
    }
  }
  .news_top_date {
    b {
      position: absolute;
      top: 8px;
      left: 16px;
      z-index: 1000;
      color: #2079a9;
    }
    &::v-deep .el-date-editor {
      .el-input__inner {
        padding-left: 120px;
      }
    }
  }
  .register_botton_a {
    font-size: 16px;
    padding: 0px 20px;
    height: 40px;
    line-height: 34px;
    margin: 0px 20px;
  }
  .news_list {
    .news_list_header {
      display: flex;
      div {
        padding: 0 20px;
        margin: 20px 0;
        font-weight: 500;
        &:nth-child(1) {
          border-right: 1px solid #000;
        }
      }
    }
    .news_list_content {
      padding: 20px 0;
      border-bottom: 2px solid #2079a9;
      display: flex;
      .news_list_content_date {
        font-family: "ManropeBlack";
        color: #2079a9;
        width: 160px;
        padding: 0px 15px;
      }
      .news_list_content_tips {
        padding: 0px 15px;
        cursor: pointer;
      }
    }
    &::v-deep .el-pagination {
      margin: 20px 0;
      text-align: center;
      .btn-prev{
        background: #fff;
        height: 36px;
        vertical-align: middle;
        .el-icon{
          font-size: 20px;
          color: #000;
        }
      }
      .el-pager{
        li{
          font-family: "ManropeBlack";
          background: #fff;
          font-size: 18px;
          height: 36px;
          line-height: 36px;
          min-width: 38px;
        }
        li:not(.disabled).active{
          background: #2CA2B9;
          color: #fff;
          border-radius: 50%;
        }
      }
      .btn-next{
        background: #fff;
        height: 36px;
        vertical-align: middle;
        .el-icon{
          font-size: 20px;
          color: #000;
        }
      }
    }
  }
}
</style>
