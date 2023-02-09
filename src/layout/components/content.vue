<template>
	<el-scrollbar>
		<div class="page m-3 relative"> </div>
		<el-backtop target=".layout-main-content>.el-scrollbar>.el-scrollbar__wrap" :bottom="15" :right="15">
			<div>
				<el-icon>
					<icon-caret-top />
				</el-icon>
			</div>
		</el-backtop>
	</el-scrollbar>
</template>

<script lang="ts"></script>
