import { useCallback } from "react";

const useImageLoading = () => {
	const onImageLoad = useCallback( (event: any) => event.currentTarget.style.opacity = 1, [] );

	return {
		onImageLoad
	};
};

export default useImageLoading;