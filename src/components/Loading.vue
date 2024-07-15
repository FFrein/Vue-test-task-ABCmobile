<template>
	<div class="loading-spinner">
	<div class="spinner">
		<div 
		class="circle" 
		v-for="(size, index) in circleSizes" 
		:key="index" 
		:style="getCircleStyle(index, size)">
		</div>
	</div>
	</div>
</template>

<script>
export default {
	data() {
	return {
		circleSizes: [26,24,22, 18, 16, 14, 12, 10, 8, 6,4,2] 
	};
	},
	methods: {
	getCircleStyle(index, size) {
		const angle = (index / this.circleSizes.length) * 2 * Math.PI;
		const radius = 35;
		const x = 50 + radius * Math.cos(angle);
		const y = 50 + radius * Math.sin(angle); 
		return {
		width: size + 'px',
		height: size + 'px',
		top: y + '%',
		left: x + '%',
		transform: 'translate(-50%, -50%)'
		};
	}
	}
};
</script>

<style scoped>
.loading-spinner {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 33px 0 27px 0;
}

.spinner {
	position: relative;
	width: 150px;
	height: 150px;
	animation: rotate 2s linear infinite;
}

.circle {
	position: absolute;
	background-color: #3BDE7C;
	border-radius: 50%;
}

@keyframes rotate {
	from { transform: rotate(0deg); }
	to { transform: rotate(-360deg); } /* Вращение против часовой стрелки */
}
</style>