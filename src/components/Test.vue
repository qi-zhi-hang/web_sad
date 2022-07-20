<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value1"
      type="monthrange"
      range-separator="至"
      start-placeholder="开始月份"
      end-placeholder="结束月份"
      :picker-options="pickerOptions"
      >
    </el-date-picker>
    <button @click="getData">点击获取日期 </button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions: {
          disabledDate:(time)=>{
              let nowDay = new Date()
              //let mapMounth = time.getMonth() + 1
              // return time < nowDay && mapMounth % 2 == 0
              return time > nowDay || (time.getFullYear()+'-'+time.getMonth() == nowDay.getFullYear()+'-'+nowDay.getMonth())
          },
          shortcuts: [{
            text: '本月',
            onClick(picker) {
              picker.$emit('pick', [new Date(), new Date()]);
            }
          }, {
            text: '今年至今',
            onClick(picker) {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近六个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 6);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: '',
        isCheck: true
      };
    },
    methods:{
      getData(){


        let now = new Date();
        let day  =  now.getFullYear()+'-'+now.getMonth()+'-'+now.getDate()
        console.log(day)

        return

        let str = '2022-06';

        let  s = str.replace("-","")
        console.log(s)
        let nowdays = new Date();
        let year = nowdays.getFullYear();
        let month = nowdays.getMonth();
        if (month == 0) {
            month = 12;
            year = year - 1;

        }
        if (month < 10) {
            month = '0' + month;
        }

        let myDate = new Date(year, month, 0);

        let startDate = new Date(year + '-' + month + '-01').getTime(); //上个月第一天
        let endDate = new Date(year + '-' + month + '-' + myDate.getDate()).getTime(); //上个月最后一天

  
        console.log(startDate,endDate)

        return 
        
        console.log('lll',this.value1)
        let start = this.value1[0];
        let end = this.value1[1];
        let intstr = new  Date(start)
        let endStr = new Date(end)
        let startYear = intstr.getFullYear();
        let startMonth = intstr.getMonth()+1

        let endYear = endStr.getFullYear();
        let endMonth = endStr.getMonth()+1
        let startTime = startYear+'-'+startMonth
        let endTime = endYear+'-'+endMonth
        
        let aa = this.getYearAndMonth(startTime,endTime)
        console.log(aa)




      },

      getYearAndMonth(start, end) {
            let result = [];
            let newResult=[];
            let starts = start.split('-');
            let ends = end.split('-');
            let staYear = parseInt(starts[0]);
            let staMon = parseInt(starts[1]);
             let firstStart = staYear+''+staMon
            if(staMon < 10){
                 firstStart = staYear+''+'0'+staMon
            }
           
            let endYear = parseInt(ends[0]);
            let endMon = parseInt(ends[1]);
            while (staYear <= endYear) {
                if (staYear === endYear) {
                    while (staMon < endMon) {
                        staMon++;
                        result.push({year: staYear, month: staMon});
                    }
                    staYear++;
                } else {
                    staMon++;
                    if (staMon > 12) {
                        staMon = 1;
                        staYear++;
                    }
                    result.push({year: staYear, month: staMon});
                }
            }
        
            for(let i=0;i<result.length;i++){
                let year=result[i].year;
                let monthinit=result[i].month;
                let month=monthinit;
               // 补'0'操作
                if(monthinit<10){
                    let month='0'+monthinit;
                }else{
                    let month=monthinit+'';
                }
                let ym=year+''+month;
                newResult.push(ym);
            }
            
            newResult.unshift(firstStart);
        
            return newResult;
        }

      
    }
  };
</script>