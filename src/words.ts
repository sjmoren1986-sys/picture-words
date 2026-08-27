export type Word = {
  id: string
  word: string
  phonetic: string
  meaning: string
  example: string
  exampleMeaning: string
  emoji: string
  colors: [string, string]
  category: string
}

export const words: Word[] = [
  { id: 'apple', word: 'apple', phonetic: '/ˈæp.əl/', meaning: '苹果', example: 'I eat an apple every day.', exampleMeaning: '我每天吃一个苹果。', emoji: '🍎', colors: ['#ffe3d8', '#ff7656'], category: '食物' },
  { id: 'cat', word: 'cat', phonetic: '/kæt/', meaning: '猫', example: 'The cat is sleeping in the sun.', exampleMeaning: '那只猫正在阳光下睡觉。', emoji: '🐈', colors: ['#ffe9b7', '#eca948'], category: '动物' },
  { id: 'book', word: 'book', phonetic: '/bʊk/', meaning: '书', example: 'This is my favorite book.', exampleMeaning: '这是我最喜欢的书。', emoji: '📚', colors: ['#d9edff', '#6198cf'], category: '日常' },
  { id: 'sun', word: 'sun', phonetic: '/sʌn/', meaning: '太阳', example: 'The sun is warm and bright.', exampleMeaning: '阳光温暖而明亮。', emoji: '☀️', colors: ['#fff0ae', '#f3b93c'], category: '自然' },
  { id: 'bicycle', word: 'bicycle', phonetic: '/ˈbaɪ.sɪ.kəl/', meaning: '自行车', example: 'I ride my bicycle to the park.', exampleMeaning: '我骑自行车去公园。', emoji: '🚲', colors: ['#d8f2e7', '#57a887'], category: '交通' },
  { id: 'dog', word: 'dog', phonetic: '/dɒɡ/', meaning: '狗', example: 'The dog loves to play.', exampleMeaning: '这只狗很喜欢玩耍。', emoji: '🐕', colors: ['#eadcff', '#8f6fc4'], category: '动物' },
  { id: 'flower', word: 'flower', phonetic: '/ˈflaʊ.ər/', meaning: '花', example: 'This flower smells wonderful.', exampleMeaning: '这朵花闻起来很香。', emoji: '🌻', colors: ['#fff1c9', '#d99f34'], category: '自然' },
  { id: 'milk', word: 'milk', phonetic: '/mɪlk/', meaning: '牛奶', example: 'Would you like some milk?', exampleMeaning: '你想喝点牛奶吗？', emoji: '🥛', colors: ['#e3f2f5', '#6aa6af'], category: '食物' },
  { id: 'credit-card', word: 'credit card', phonetic: '/ˈkred.ɪt ˌkɑːrd/', meaning: '信用卡', example: 'Can I pay by credit card?', exampleMeaning: '我可以用信用卡付款吗？', emoji: '💳', colors: ['#e2e8ff', '#6576c9'], category: '金融' },
  { id: 'bank-card', word: 'bank card', phonetic: '/ˈbæŋk ˌkɑːrd/', meaning: '银行卡', example: 'I left my bank card at home.', exampleMeaning: '我把银行卡落在家里了。', emoji: '💳', colors: ['#dff2ec', '#4f9c81'], category: '金融' },
  { id: 'loan', word: 'loan', phonetic: '/ləʊn/', meaning: '贷款', example: 'She applied for a bank loan.', exampleMeaning: '她申请了一笔银行贷款。', emoji: '🏦', colors: ['#e7ecf1', '#657886'], category: '金融' },
  { id: 'black-bean', word: 'black bean', phonetic: '/ˌblæk ˈbiːn/', meaning: '黑豆', example: 'Black beans are rich in protein.', exampleMeaning: '黑豆富含蛋白质。', emoji: '🫘', colors: ['#e6ded5', '#68594d'], category: '食物' },
  { id: 'glasses-case', word: 'glasses case', phonetic: '/ˈɡlɑː.sɪz ˌkeɪs/', meaning: '眼镜盒', example: 'My glasses are in the glasses case.', exampleMeaning: '我的眼镜在眼镜盒里。', emoji: '👓', colors: ['#f0e3d9', '#a87358'], category: '日常' },
  { id: 'shampoo', word: 'shampoo', phonetic: '/ʃæmˈpuː/', meaning: '洗发水', example: 'I need to buy some shampoo.', exampleMeaning: '我需要买一些洗发水。', emoji: '🧴', colors: ['#e5dcf7', '#8e70b7'], category: '日常' },
  { id: 'remote-control', word: 'remote control', phonetic: '/rɪˌməʊt kənˈtrəʊl/', meaning: '遥控器', example: 'Where is the remote control?', exampleMeaning: '遥控器在哪里？', emoji: '🎛️', colors: ['#dee8eb', '#617d85'], category: '家居' },
  { id: 'air-conditioner', word: 'air conditioner', phonetic: '/ˈeər kənˌdɪʃ.ən.ər/', meaning: '空调', example: 'Please turn on the air conditioner.', exampleMeaning: '请打开空调。', emoji: '❄️', colors: ['#dcefff', '#68a7d4'], category: '家居' },
  { id: 'curtain', word: 'curtain', phonetic: '/ˈkɜː.tən/', meaning: '窗帘', example: 'She opened the curtain this morning.', exampleMeaning: '她今天早上拉开了窗帘。', emoji: '🪟', colors: ['#f5dfdc', '#b86f68'], category: '家居' },
  { id: 'kettlebell', word: 'kettlebell', phonetic: '/ˈket.əl.bel/', meaning: '壶铃', example: 'He lifts a kettlebell at the gym.', exampleMeaning: '他在健身房举壶铃。', emoji: '🏋️', colors: ['#e0e5df', '#667369'], category: '运动' },
  { id: 'commute', word: 'commute', phonetic: '/kəˈmjuːt/', meaning: '通勤', example: 'I commute to work by train.', exampleMeaning: '我乘火车通勤上班。', emoji: '🚆', colors: ['#dceaf1', '#527d91'], category: '通勤' },
  { id: 'subway', word: 'subway', phonetic: '/ˈsʌb.weɪ/', meaning: '地铁', example: 'I take the subway every morning.', exampleMeaning: '我每天早上坐地铁。', emoji: '🚇', colors: ['#e3e8ee', '#657585'], category: '交通' },
  { id: 'bus-stop', word: 'bus stop', phonetic: '/ˈbʌs ˌstɒp/', meaning: '公交车站', example: 'She is waiting at the bus stop.', exampleMeaning: '她正在公交车站等车。', emoji: '🚏', colors: ['#e6f0e4', '#72906c'], category: '交通' },
  { id: 'rush-hour', word: 'rush hour', phonetic: '/ˈrʌʃ ˌaʊər/', meaning: '上下班高峰期', example: 'The subway is crowded during rush hour.', exampleMeaning: '上下班高峰期地铁很拥挤。', emoji: '🚉', colors: ['#f4e6d9', '#ac7654'], category: '通勤' },
  { id: 'traffic-jam', word: 'traffic jam', phonetic: '/ˈtræf.ɪk ˌdʒæm/', meaning: '交通堵塞', example: 'We were late because of a traffic jam.', exampleMeaning: '我们因为堵车迟到了。', emoji: '🚗', colors: ['#f1dedb', '#a96058'], category: '交通' },
  { id: 'crosswalk', word: 'crosswalk', phonetic: '/ˈkrɒs.wɔːk/', meaning: '人行横道', example: 'Please use the crosswalk.', exampleMeaning: '请走人行横道。', emoji: '🚶', colors: ['#e6e7e5', '#727873'], category: '交通' },
  { id: 'platform', word: 'platform', phonetic: '/ˈplæt.fɔːm/', meaning: '站台', example: 'The train leaves from platform three.', exampleMeaning: '火车从三号站台发车。', emoji: '🚉', colors: ['#e1eaf0', '#5d7d90'], category: '交通' },
  { id: 'transfer', word: 'transfer', phonetic: '/trænsˈfɜːr/', meaning: '换乘', example: 'Transfer to Line 2 at this station.', exampleMeaning: '在这一站换乘二号线。', emoji: '🔄', colors: ['#e1f0eb', '#529078'], category: '交通' },
  { id: 'fare', word: 'fare', phonetic: '/feər/', meaning: '车费', example: 'How much is the bus fare?', exampleMeaning: '公交车费是多少？', emoji: '🎫', colors: ['#f6e9ce', '#b58b3e'], category: '交通' },
  { id: 'commuter', word: 'commuter', phonetic: '/kəˈmjuː.tər/', meaning: '通勤者', example: 'Many commuters take this train.', exampleMeaning: '许多通勤者乘坐这趟火车。', emoji: '🧑‍💼', colors: ['#e2ebf3', '#617f99'], category: '通勤' },
  { id: 'office', word: 'office', phonetic: '/ˈɒf.ɪs/', meaning: '办公室', example: 'Our office is on the tenth floor.', exampleMeaning: '我们的办公室在十楼。', emoji: '🏢', colors: ['#e1e9ed', '#687e89'], category: '办公' },
  { id: 'elevator', word: 'elevator', phonetic: '/ˈel.ɪ.veɪ.tər/', meaning: '电梯', example: 'Take the elevator to the fifth floor.', exampleMeaning: '乘电梯到五楼。', emoji: '🛗', colors: ['#e6e8e9', '#747b7e'], category: '办公' },
  { id: 'access-card', word: 'access card', phonetic: '/ˈæk.ses ˌkɑːrd/', meaning: '门禁卡', example: 'I use my access card to enter the office.', exampleMeaning: '我使用门禁卡进入办公室。', emoji: '🪪', colors: ['#e3e6f4', '#6c75a5'], category: '办公' },
  { id: 'colleague', word: 'colleague', phonetic: '/ˈkɒl.iːɡ/', meaning: '同事', example: 'I had lunch with my colleague.', exampleMeaning: '我和同事一起吃了午饭。', emoji: '🤝', colors: ['#e1f0e8', '#5c8f75'], category: '办公' },
  { id: 'meeting', word: 'meeting', phonetic: '/ˈmiː.tɪŋ/', meaning: '会议', example: 'We have a meeting at ten o’clock.', exampleMeaning: '我们十点有一个会议。', emoji: '👥', colors: ['#e6e1f1', '#77699a'], category: '办公' },
  { id: 'deadline', word: 'deadline', phonetic: '/ˈded.laɪn/', meaning: '截止日期', example: 'The deadline is this Friday.', exampleMeaning: '截止日期是本周五。', emoji: '⏰', colors: ['#f5e0da', '#b76350'], category: '办公' },
  { id: 'laptop', word: 'laptop', phonetic: '/ˈlæp.tɒp/', meaning: '笔记本电脑', example: 'I bring my laptop to work every day.', exampleMeaning: '我每天都带笔记本电脑上班。', emoji: '💻', colors: ['#dde8ee', '#5e7c8c'], category: '办公' },
  { id: 'lunch-break', word: 'lunch break', phonetic: '/ˈlʌntʃ ˌbreɪk/', meaning: '午休', example: 'I go for a walk during my lunch break.', exampleMeaning: '我在午休时出去散步。', emoji: '🍱', colors: ['#f5ead5', '#ae8045'], category: '作息' },
  { id: 'overtime', word: 'overtime', phonetic: '/ˈəʊ.və.taɪm/', meaning: '加班', example: 'I have to work overtime tonight.', exampleMeaning: '我今晚不得不加班。', emoji: '🌙', colors: ['#e1e3f1', '#686f9b'], category: '作息' },
  { id: 'clock-out', word: 'clock out', phonetic: '/ˌklɒk ˈaʊt/', meaning: '打卡下班', example: 'I usually clock out at six.', exampleMeaning: '我通常六点打卡下班。', emoji: '🏁', colors: ['#e0eee6', '#5f9174'], category: '作息' },
  { id: 'workout', word: 'workout', phonetic: '/ˈwɝːk.aʊt/', meaning: '锻炼；训练', example: 'I finished a thirty-minute workout.', exampleMeaning: '我完成了三十分钟的锻炼。', emoji: '🏋️', colors: ['#dcebe4', '#4f8f70'], category: '健身' },
  { id: 'fitness', word: 'fitness', phonetic: '/ˈfɪt.nəs/', meaning: '健康；健身', example: 'Fitness is part of my daily routine.', exampleMeaning: '健身是我日常生活的一部分。', emoji: '💪', colors: ['#e4eaf5', '#647ba3'], category: '健身' },
  { id: 'dumbbell', word: 'dumbbell', phonetic: '/ˈdʌm.bel/', meaning: '哑铃', example: 'Choose a dumbbell that you can lift safely.', exampleMeaning: '选择一个你能安全举起的哑铃。', emoji: '🏋️‍♀️', colors: ['#e4e7e8', '#68747a'], category: '器械' },
  { id: 'squat', word: 'squat', phonetic: '/skwɑːt/', meaning: '深蹲', example: 'Keep your back straight during a squat.', exampleMeaning: '做深蹲时保持背部挺直。', emoji: '🦵', colors: ['#f0e1d7', '#a97558'], category: '动作' },
  { id: 'push-up', word: 'push-up', phonetic: '/ˈpʊʃ.ʌp/', meaning: '俯卧撑', example: 'She can do twenty push-ups without stopping.', exampleMeaning: '她可以连续做二十个俯卧撑。', emoji: '🤸', colors: ['#e0edf0', '#5d8992'], category: '动作' },
  { id: 'treadmill', word: 'treadmill', phonetic: '/ˈtred.mɪl/', meaning: '跑步机', example: 'I walked on the treadmill for forty minutes.', exampleMeaning: '我在跑步机上走了四十分钟。', emoji: '🏃', colors: ['#e1e8ed', '#607d8b'], category: '器械' },
  { id: 'strength-training', word: 'strength training', phonetic: '/ˈstreŋθ ˌtreɪ.nɪŋ/', meaning: '力量训练', example: 'Strength training helps build muscle.', exampleMeaning: '力量训练有助于增长肌肉。', emoji: '💪', colors: ['#e8e1ef', '#7e6996'], category: '健身' },
  { id: 'calorie', word: 'calorie', phonetic: '/ˈkæl.ɚ.i/', meaning: '卡路里；热量', example: 'This snack contains about two hundred calories.', exampleMeaning: '这份零食含有大约两百卡路里。', emoji: '🔥', colors: ['#f7e1d5', '#c36c45'], category: '减脂' },
  { id: 'calorie-deficit', word: 'calorie deficit', phonetic: '/ˈkæl.ɚ.i ˈdef.ə.sɪt/', meaning: '热量缺口', example: 'A moderate calorie deficit can support weight loss.', exampleMeaning: '适度的热量缺口有助于减重。', emoji: '📉', colors: ['#e3efe5', '#63906b'], category: '减脂' },
  { id: 'metabolism', word: 'metabolism', phonetic: '/məˈtæb.əˌlɪz.əm/', meaning: '新陈代谢', example: 'Sleep and activity can affect your metabolism.', exampleMeaning: '睡眠和活动会影响你的新陈代谢。', emoji: '⚡', colors: ['#f7eccf', '#b38c3e'], category: '减脂' },
  { id: 'body-fat', word: 'body fat', phonetic: '/ˈbɑː.di ˌfæt/', meaning: '体脂', example: 'The goal is to reduce body fat gradually.', exampleMeaning: '目标是逐步降低体脂。', emoji: '📊', colors: ['#e4e9ed', '#687d89'], category: '减脂' },
  { id: 'weight-loss', word: 'weight loss', phonetic: '/ˈweɪt ˌlɔːs/', meaning: '减重；减肥', example: 'Healthy weight loss usually takes time.', exampleMeaning: '健康减重通常需要时间。', emoji: '⚖️', colors: ['#e1eee8', '#5e9279'], category: '减脂' },
  { id: 'protein', word: 'protein', phonetic: '/ˈproʊ.tiːn/', meaning: '蛋白质', example: 'Eggs are a convenient source of protein.', exampleMeaning: '鸡蛋是方便的蛋白质来源。', emoji: '🥚', colors: ['#f5ead2', '#b48a45'], category: '营养' },
  { id: 'carbohydrate', word: 'carbohydrate', phonetic: '/ˌkɑːr.boʊˈhaɪ.dreɪt/', meaning: '碳水化合物', example: 'Rice is a common source of carbohydrates.', exampleMeaning: '米饭是常见的碳水化合物来源。', emoji: '🍚', colors: ['#eee9dc', '#988568'], category: '营养' },
  { id: 'ketogenic-diet', word: 'ketogenic diet', phonetic: '/ˌkiː.toʊˈdʒen.ɪk ˈdaɪ.ət/', meaning: '生酮饮食', example: 'A ketogenic diet is very low in carbohydrates.', exampleMeaning: '生酮饮食中的碳水化合物含量很低。', emoji: '🥑', colors: ['#dfeeda', '#69965e'], category: '生酮' },
  { id: 'ketosis', word: 'ketosis', phonetic: '/kɪˈtoʊ.sɪs/', meaning: '酮症；酮体代谢状态', example: 'Ketosis occurs when the body uses fat for fuel.', exampleMeaning: '当身体使用脂肪作为燃料时，会进入酮症状态。', emoji: '🧬', colors: ['#e4e0f1', '#786c9c'], category: '生酮' },
  { id: 'healthy-fat', word: 'healthy fat', phonetic: '/ˈhel.θi ˌfæt/', meaning: '健康脂肪', example: 'Avocados contain healthy fats.', exampleMeaning: '牛油果含有健康脂肪。', emoji: '🥑', colors: ['#e2efcf', '#76984c'], category: '生酮' },
  { id: 'intermittent-fasting', word: 'intermittent fasting', phonetic: '/ˌɪn.tɚˈmɪt.ənt ˈfæs.tɪŋ/', meaning: '间歇性禁食', example: 'Intermittent fasting limits when you eat.', exampleMeaning: '间歇性禁食会限制进食的时间。', emoji: '⏳', colors: ['#e7e5f0', '#777293'], category: '饮食' },
  { id: 'electrolyte', word: 'electrolyte', phonetic: '/ɪˈlek.trəˌlaɪt/', meaning: '电解质', example: 'Water and electrolytes are important after exercise.', exampleMeaning: '运动后补充水分和电解质很重要。', emoji: '💧', colors: ['#dceef5', '#5793aa'], category: '营养' },
  { id: 'meal-prep', word: 'meal prep', phonetic: '/ˈmiːl ˌprep/', meaning: '备餐；提前准备膳食', example: 'Meal prep makes healthy eating easier.', exampleMeaning: '提前备餐让健康饮食更加容易。', emoji: '🥗', colors: ['#e0efdf', '#60925c'], category: '饮食' },
]
